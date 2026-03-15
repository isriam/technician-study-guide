#!/usr/bin/env python3
"""
Convert narrative audio markdown files to spoken text for TTS.

Handles simple narrative format with # and ## headers and plain paragraphs.
No question/answer blocks — just flowing prose with section headers.
"""
import re
import sys


def clean_md(text: str) -> str:
    """Strip markdown formatting, return natural spoken text."""
    # Remove bold/italic markers
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    # Remove inline code
    text = re.sub(r'`([^`]+)`', r'\1', text)
    # Remove links, keep text
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    # Collapse excess whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def convert_narrative(path: str) -> str:
    """Convert a narrative markdown file to spoken text."""
    with open(path) as f:
        content = f.read()

    spoken = []
    lines = content.split('\n')

    for line in lines:
        line = line.rstrip()

        # H1 title
        if re.match(r'^#\s+', line):
            title = re.sub(r'^#\s+', '', line).strip()
            spoken.append(clean_md(title) + '.')
            spoken.append('')

        # H2 section header — add a pause before and speak naturally
        elif re.match(r'^##\s+', line):
            header = re.sub(r'^##\s+', '', line).strip()
            spoken.append('')
            spoken.append(clean_md(header) + '.')
            spoken.append('')

        # Blank lines become paragraph breaks
        elif line == '':
            if spoken and spoken[-1] != '':
                spoken.append('')

        # Regular paragraph text
        else:
            spoken.append(clean_md(line))

    # Clean up trailing whitespace
    while spoken and spoken[-1] == '':
        spoken.pop()

    return '\n'.join(spoken)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: narrative-to-tts.py <file.md>', file=sys.stderr)
        sys.exit(1)

    path = sys.argv[1]
    print(convert_narrative(path))
