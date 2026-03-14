#!/usr/bin/env python3
"""Generate TTS audio for Technician study guide modules.

Reads a subelement markdown file, strips markdown formatting, applies
pronunciation dictionary, chunks for TTS, generates audio via kokoro-tts,
and concatenates into a single MP3.

Usage:
    # Single module
    python3 tts/generate-audio.py subelements/T1-fcc-rules.md

    # All modules
    python3 tts/generate-audio.py --all

    # Cram sheet
    python3 tts/generate-audio.py CRAM-SHEET.md

    # Custom voice
    python3 tts/generate-audio.py subelements/T1-fcc-rules.md --voice will

    # Dry run (show spoken text without generating audio)
    python3 tts/generate-audio.py subelements/T1-fcc-rules.md --dry-run
"""

import argparse
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
REPO_DIR = SCRIPT_DIR.parent
PRONUNCIATION_FILE = SCRIPT_DIR / "pronunciation.md"
DEFAULT_VOICE = "will"
MAX_CHUNK_CHARS = 2000
OPEN_SPEECH_URL = os.environ.get("SPEECH_URL", "https://localhost:8100/v1/audio/speech")


def load_pronunciation(path):
    """Parse pronunciation.md tables into (pattern, replacement) pairs."""
    pairs = []
    with open(path) as f:
        for line in f:
            line = line.strip()
            # Parse markdown table rows: | TERM | spoken form |
            if line.startswith('|') and not line.startswith('|--') and not line.startswith('| Written') and not line.startswith('| Term'):
                parts = [p.strip() for p in line.split('|')[1:-1]]
                if len(parts) == 2:
                    raw, spoken = parts
                    if raw and spoken and raw not in ('Written', 'Term', 'Prefix', 'dB Change', 'Formula'):
                        # Word-boundary match for most terms
                        try:
                            pattern = re.compile(r'\b' + re.escape(raw) + r'\b')
                            pairs.append((pattern, spoken))
                        except re.error:
                            pass
    return pairs


def markdown_to_spoken(text):
    """Convert markdown to natural spoken text."""
    lines = text.split('\n')
    spoken_lines = []

    for line in lines:
        stripped = line.strip()

        # Skip empty lines
        if not stripped:
            spoken_lines.append('')
            continue

        # Section headers → spoken intro
        if stripped.startswith('# '):
            title = stripped.lstrip('# ').strip()
            spoken_lines.append(f'\n{title}.\n')
            continue
        if stripped.startswith('## '):
            title = stripped.lstrip('## ').strip()
            spoken_lines.append(f'\n{title}.\n')
            continue
        if stripped.startswith('### '):
            qid = stripped.lstrip('### ').strip()
            spoken_lines.append(f'\nQuestion {qid}.\n')
            continue

        # Skip metadata lines
        if stripped.startswith('*') and stripped.endswith('*') and 'questions on the exam' in stripped:
            spoken_lines.append(stripped.strip('*').strip() + '.')
            continue

        # Bold correct answer
        if stripped.startswith('- **') and '✅' in stripped:
            answer = stripped.replace('- **', '').replace('**', '').replace('✅', '').strip()
            spoken_lines.append(f'  {answer}. This is the correct answer.')
            continue

        # Regular answer choices
        if stripped.startswith('- ') and re.match(r'^- [A-D]\)', stripped):
            answer = stripped.replace('- ', '').strip()
            spoken_lines.append(f'  {answer}.')
            continue

        # Explanation blocks
        if stripped.startswith('> '):
            explanation = stripped.lstrip('> ').strip()
            spoken_lines.append(f'  Explanation: {explanation}')
            continue

        # Table rows → skip header rows, read data rows naturally
        if stripped.startswith('|'):
            if stripped.startswith('|--') or stripped.startswith('| -'):
                continue
            parts = [p.strip() for p in stripped.split('|')[1:-1]]
            if parts and not all(p.startswith('-') for p in parts):
                spoken_lines.append(', '.join(parts) + '.')
            continue

        # Strip remaining markdown
        clean = stripped
        clean = re.sub(r'\*\*(.+?)\*\*', r'\1', clean)  # bold
        clean = re.sub(r'\*(.+?)\*', r'\1', clean)       # italic
        clean = re.sub(r'`(.+?)`', r'\1', clean)         # code
        clean = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', clean)  # links
        clean = clean.replace('---', '')                    # hr
        spoken_lines.append(clean)

    return '\n'.join(spoken_lines)


def apply_pronunciation(text, pairs):
    """Apply pronunciation replacements."""
    for pattern, replacement in pairs:
        text = pattern.sub(replacement, text)
    return text


def chunk_text(text, max_chars=2000):
    """Split text at paragraph boundaries."""
    paragraphs = text.split('\n\n')
    chunks = []
    current = ''
    for p in paragraphs:
        if len(current) + len(p) > max_chars and current:
            chunks.append(current.strip())
            current = p
        else:
            current += '\n\n' + p if current else p
    if current.strip():
        chunks.append(current.strip())
    return chunks


def generate_audio(input_path, voice=DEFAULT_VOICE, dry_run=False):
    """Generate MP3 from markdown file."""
    input_path = Path(input_path)
    output_path = input_path.with_suffix('.mp3')

    print(f"=== Technician Study Guide TTS ===")
    print(f"Input:  {input_path}")
    print(f"Output: {output_path}")
    print(f"Voice:  {voice}")

    # Read markdown
    with open(input_path) as f:
        md_text = f.read()

    # Convert to spoken text
    print("-> Converting markdown to spoken text...")
    spoken = markdown_to_spoken(md_text)

    # Apply pronunciation
    print("-> Applying pronunciation dictionary...")
    pairs = load_pronunciation(PRONUNCIATION_FILE)
    spoken = apply_pronunciation(spoken, pairs)
    print(f"   Applied {len(pairs)} pronunciation rules")

    if dry_run:
        print("\n--- DRY RUN: Spoken text ---")
        print(spoken[:3000])
        if len(spoken) > 3000:
            print(f"\n... ({len(spoken)} total chars)")
        return

    # Chunk
    chunks = chunk_text(spoken, MAX_CHUNK_CHARS)
    print(f"-> Split into {len(chunks)} chunks")

    # Generate audio
    work_dir = tempfile.mkdtemp()
    try:
        for i, chunk in enumerate(chunks):
            chunk_file = os.path.join(work_dir, f"chunk_{i:03d}.txt")
            chunk_mp3 = os.path.join(work_dir, f"chunk_{i:03d}.mp3")
            with open(chunk_file, 'w') as f:
                f.write(chunk)
            print(f"  Generating chunk {i+1}/{len(chunks)}...")
            import json as _json
            payload = _json.dumps({
                "input": chunk,
                "voice": voice,
                "model": "kokoro",
                "response_format": "mp3"
            })
            subprocess.run(
                ["curl", "-sk", "--max-time", "120",
                 OPEN_SPEECH_URL,
                 "-X", "POST",
                 "-H", "Content-Type: application/json",
                 "-d", payload,
                 "-o", chunk_mp3],
                check=True, capture_output=True
            )

        # Concatenate
        print("-> Concatenating...")
        concat_file = os.path.join(work_dir, "concat.txt")
        mp3_files = sorted([f for f in os.listdir(work_dir) if f.endswith('.mp3')])
        with open(concat_file, 'w') as f:
            for mp3 in mp3_files:
                f.write(f"file '{os.path.join(work_dir, mp3)}'\n")

        subprocess.run(
            ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat_file,
             "-c:a", "libmp3lame", "-b:a", "128k", str(output_path)],
            check=True, capture_output=True
        )

        # Report
        result = subprocess.run(
            ["ffprobe", "-v", "quiet", "-show_entries", "format=duration",
             "-of", "default=noprint_wrappers=1:nokey=1", str(output_path)],
            capture_output=True, text=True
        )
        duration = float(result.stdout.strip()) if result.stdout.strip() else 0
        size = output_path.stat().st_size
        mins = int(duration // 60)
        secs = int(duration % 60)

        print(f"=== Done ===")
        print(f"File:     {output_path}")
        print(f"Duration: {mins}m {secs}s")
        print(f"Size:     {size / 1024 / 1024:.1f}MB")

    finally:
        import shutil
        shutil.rmtree(work_dir, ignore_errors=True)


def main():
    parser = argparse.ArgumentParser(description="Generate TTS audio for study guide")
    parser.add_argument("input", nargs="?", help="Markdown file to convert")
    parser.add_argument("--all", action="store_true", help="Generate all modules + cram sheet")
    parser.add_argument("--voice", default=DEFAULT_VOICE, help="TTS voice (default: will)")
    parser.add_argument("--dry-run", action="store_true", help="Show spoken text without generating")
    args = parser.parse_args()

    if args.all:
        files = sorted(REPO_DIR.glob("subelements/*.md"))
        files.append(REPO_DIR / "CRAM-SHEET.md")
        for f in files:
            generate_audio(f, voice=args.voice, dry_run=args.dry_run)
            print()
    elif args.input:
        generate_audio(args.input, voice=args.voice, dry_run=args.dry_run)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
