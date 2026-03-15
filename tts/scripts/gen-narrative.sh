#!/bin/bash
# Generate TTS audio for a narrative-style markdown file.
# Uses narrative-to-tts.py instead of tech-to-tts.py
# Usage: gen-narrative.sh <narrative-audio.md> <output.mp3> [voice]
set -e

MD_FILE="$1"
OUTPUT="$2"
VOICE="${3:-will}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ -z "$MD_FILE" ] || [ -z "$OUTPUT" ]; then
    echo "Usage: $0 <narrative-audio.md> <output.mp3> [voice]"
    exit 1
fi

if [ ! -f "$MD_FILE" ]; then
    echo "File not found: $MD_FILE" >&2
    exit 1
fi

WORK_DIR=$(mktemp -d)
cleanup() { rm -rf "$WORK_DIR"; }
trap cleanup EXIT

echo "==> $(basename "$MD_FILE") -> $(basename "$OUTPUT")"

# Convert narrative markdown to spoken text
python3 "$SCRIPT_DIR/narrative-to-tts.py" "$MD_FILE" > "$WORK_DIR/spoken.txt"

CHARS=$(wc -c < "$WORK_DIR/spoken.txt")
echo "   Spoken text: $CHARS chars"

# Run the shared audio generator pipeline
bash "$SCRIPT_DIR/generate-audio.sh" "$WORK_DIR/spoken.txt" "$OUTPUT" "$VOICE"
