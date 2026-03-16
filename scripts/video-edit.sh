#!/bin/bash
# Video editing helper script using ffmpeg
# Usage: ./video-edit.sh <command> <args...>

COMMAND="${1:-help}"
shift || true

case "$COMMAND" in
    merge)
        OUTPUT="$1"
        shift
        echo "Merging files into $OUTPUT..."
        > /tmp/merge_list.txt
        for f in "$@"; do
            echo "file '$f'" >> /tmp/merge_list.txt
        done
        ffmpeg -f concat -safe 0 -i /tmp/merge_list.txt -c copy "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    split)
        INPUT="$1"
        START="$2"
        END="$3"
        OUTPUT="$4"
        echo "Splitting $INPUT from $START to $END..."
        ffmpeg -i "$INPUT" -ss "$START" -to "$END" -c copy "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    trim)
        INPUT="$1"
        DURATION="$2"
        OUTPUT="$3"
        echo "Trimming $INPUT to $DURATION seconds..."
        ffmpeg -i "$INPUT" -t "$DURATION" -c copy "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    convert)
        INPUT="$1"
        OUTPUT="$2"
        echo "Converting $INPUT to $OUTPUT..."
        ffmpeg -i "$INPUT" "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    extract-audio)
        INPUT="$1"
        OUTPUT="$2"
        echo "Extracting audio from $INPUT..."
        ffmpeg -i "$INPUT" -vn -acodec libmp3lame -q:a 2 "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    resize)
        INPUT="$1"
        WIDTH="$2"
        HEIGHT="$3"
        OUTPUT="$4"
        echo "Resizing $INPUT to ${WIDTH}x${HEIGHT}..."
        ffmpeg -i "$INPUT" -vf scale="$WIDTH:$HEIGHT" "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    add-audio)
        VIDEO="$1"
        AUDIO="$2"
        OUTPUT="$3"
        echo "Adding audio to $VIDEO..."
        ffmpeg -i "$VIDEO" -i "$AUDIO" -c copy -map 0:v:0 -map 1:a:0 -shortest "$OUTPUT"
        echo "Done! Output: $OUTPUT"
        ;;
        
    info)
        INPUT="$1"
        ffprobe -v quiet -print_format json -show_format -show_streams "$INPUT"
        ;;
        
    help|*)
        echo "Video Edit - FFmpeg Helper"
        echo ""
        echo "Commands:"
        echo "  merge <output> <file1> <file2> ..."
        echo "  split <input> <start> <end> <output>"
        echo "  trim <input> <duration> <output>"
        echo "  convert <input> <output>"
        echo "  extract-audio <input> <output>"
        echo "  resize <input> <w> <h> <output>"
        echo "  add-audio <video> <audio> <output>"
        echo "  info <input>"
        ;;
esac
