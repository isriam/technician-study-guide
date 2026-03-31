#!/bin/bash
# Regenerate all 10 subelement MP3s + cram sheet MP3 (11 total).
# Usage: gen-all.sh [voice]
set -e

VOICE="${1:-will}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
SUBELEMENTS_DIR="$REPO_DIR/subelements"
CRAM_SHEET="$REPO_DIR/CRAM-SHEET.md"
KOKORO="$HOME/.openclaw/skills/voice/scripts/tts-kokoro"

echo "=== Technician Study Guide — Full TTS Regeneration ==="
echo "Voice: $VOICE"
echo "Repo:  $REPO_DIR"
echo ""

# Verify TTS server is reachable
echo "-> Checking TTS server..."
CHECK=$(python3 "$KOKORO" --check 2>&1)
if ! echo "$CHECK" | python3 -c "import sys,json; d=json.load(sys.stdin); sys.exit(0 if d.get('available') else 1)" 2>/dev/null; then
    echo "ERROR: TTS server not reachable. Check that the Open Speech TTS server is running" >&2
    echo "$CHECK" >&2
    exit 1
fi
echo "   Server OK"
echo ""

FAILED=0
DONE=0

# Process each subelement (sorted)
for md_file in $(ls "$SUBELEMENTS_DIR"/*.md | sort); do
    name=$(basename "$md_file" .md)
    echo "--- [$((DONE + 1))/11] $name ---"
    if bash "$SCRIPT_DIR/gen-module-tts.sh" "$md_file" "$VOICE"; then
        DONE=$((DONE + 1))
    else
        echo "FAILED: $name" >&2
        FAILED=$((FAILED + 1))
    fi
    echo ""
done

# Process cram sheet
echo "--- [11/11] CRAM-SHEET ---"
WORK_DIR=$(mktemp -d)
cleanup() { rm -rf "$WORK_DIR"; }
trap cleanup EXIT

python3 "$SCRIPT_DIR/tech-to-tts.py" "$CRAM_SHEET" --cram > "$WORK_DIR/cram-spoken.txt"
if bash "$SCRIPT_DIR/generate-audio.sh" "$WORK_DIR/cram-spoken.txt" "$REPO_DIR/CRAM-SHEET.mp3" "$VOICE"; then
    DONE=$((DONE + 1))
else
    echo "FAILED: CRAM-SHEET" >&2
    FAILED=$((FAILED + 1))
fi

echo ""
echo "=== Summary: $DONE/11 complete, $FAILED failed ==="

if [ "$FAILED" -gt 0 ]; then
    exit 1
fi
