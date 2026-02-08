#!/usr/bin/env python3
"""
Bundle question data from Teacher Project into JSON files for the cloud-hosted
student trainer.

Run from the Teacher Project root directory.

Usage:
    python3 bundle_for_cloud.py

    Optional: specify output directory (default: ./wace-student-trainer)
    python3 bundle_for_cloud.py --output /path/to/repo

ENCODING SAFETY: All output JSON files use ensure_ascii=True.
"""

import json
import os
import sys
import shutil
from pathlib import Path
from datetime import datetime
import argparse


TEACHER_ROOT = Path('.')


def load_json_safe(filepath):
    """Load a JSON file with explicit UTF-8 encoding."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def write_json_safe(filepath, data):
    """
    Write data as a JSON file.
    CRITICAL: ensure_ascii=True makes the output pure ASCII-safe.
    """
    content = json.dumps(data, ensure_ascii=True, indent=2)

    # Verify the content is actually ASCII before writing
    try:
        content.encode('ascii')
    except UnicodeEncodeError as e:
        print(f"ENCODING ERROR: Non-ASCII character found in output")
        print(f"  Character: {e.object[e.start:e.end]} at position {e.start}")
        sys.exit(1)

    with open(filepath, 'w', encoding='ascii') as f:
        f.write(content)
    print(f"  Wrote {filepath} ({os.path.getsize(filepath):,} bytes, ASCII-safe)")


def bundle_questions():
    """Bundle all question JSON files into a single dict."""
    questions = {}
    for folder_name in ['questions', 'practice_questions']:
        folder = TEACHER_ROOT / folder_name
        if not folder.exists():
            print(f"  Skipping {folder_name}/ (not found)")
            continue
        for f in sorted(folder.glob('*_Complete.json')):
            try:
                data = load_json_safe(f)
                # Tag with source pool
                if folder_name == 'questions':
                    data['_pool'] = 'original'
                else:
                    data['_pool'] = 'practice'
                data['_filename'] = f.name
                questions[f.name] = data
            except Exception as e:
                print(f"  WARNING: Failed to load {f.name}: {e}")

    print(f"  Loaded {len(questions)} questions")
    return questions


def bundle_taxonomy():
    """Load taxonomy index."""
    path = TEACHER_ROOT / 'taxonomy_index.json'
    if not path.exists():
        print("  WARNING: taxonomy_index.json not found")
        return {}
    return load_json_safe(path)


def bundle_question_index():
    """Load question master index."""
    path = TEACHER_ROOT / 'question_master_index.json'
    if not path.exists():
        print("  WARNING: question_master_index.json not found")
        return {}
    return load_json_safe(path)


def copy_diagrams(dest_root):
    """Copy diagram PNG files to the repo. Reports sizes."""
    total_bytes = 0
    large_files = []
    for src_folder, dest_folder in [
        ('diagrams', 'diagrams'),
        ('practice_diagrams', 'practice_diagrams')
    ]:
        src = TEACHER_ROOT / src_folder
        dest = dest_root / dest_folder
        if not src.exists():
            print(f"  Skipping {src_folder}/ (not found)")
            continue
        dest.mkdir(parents=True, exist_ok=True)
        count = 0
        folder_bytes = 0
        for png in src.glob('*.png'):
            shutil.copy2(str(png), str(dest / png.name))
            file_size = png.stat().st_size
            folder_bytes += file_size
            if file_size > 200 * 1024:
                large_files.append((png.name, file_size / 1024))
            count += 1
        total_bytes += folder_bytes
        print(f"  Copied {count} PNGs from {src_folder}/ ({folder_bytes / 1024 / 1024:.1f} MB)")

    if large_files:
        print(f"\n  WARNING: {len(large_files)} PNG(s) are larger than 200 KB:")
        for name, kb in large_files[:10]:
            print(f"    {name}: {kb:.0f} KB")
        if len(large_files) > 10:
            print(f"    ... and {len(large_files) - 10} more")
        print("  TIP: Optimize PNGs with pngquant or TinyPNG.")

    total_mb = total_bytes / (1024 * 1024)
    print(f"  Total diagram size: {total_mb:.1f} MB")
    return total_mb


def verify_ascii(filepath):
    """Verify a file contains only ASCII bytes."""
    with open(filepath, 'rb') as f:
        content = f.read()
    try:
        content.decode('ascii')
        return True
    except UnicodeDecodeError as e:
        print(f"  ENCODING FAILURE: {filepath} contains non-ASCII at byte {e.start}")
        print(f"  Byte value: 0x{content[e.start]:02x}")
        return False


def main():
    parser = argparse.ArgumentParser(description='Bundle data for cloud student trainer')
    parser.add_argument('--output', '-o', default='./wace-student-trainer',
                        help='Path to the GitHub repo directory')
    args = parser.parse_args()

    dest_root = Path(args.output)

    print("=" * 60)
    print("WACE Student Trainer -- Cloud Data Bundler")
    print(f"Run at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Output: {dest_root.resolve()}")
    print("=" * 60)

    # Create output directory structure
    data_dir = dest_root / 'data'
    data_dir.mkdir(parents=True, exist_ok=True)
    for subdir in ['diagrams', 'practice_diagrams', 'lib']:
        (dest_root / subdir).mkdir(parents=True, exist_ok=True)

    # Bundle questions
    print("\n[1/5] Bundling questions...")
    questions = bundle_questions()
    questions_path = data_dir / 'questions.json'
    write_json_safe(questions_path, questions)

    # Bundle taxonomy
    print("\n[2/5] Bundling taxonomy...")
    taxonomy = bundle_taxonomy()
    write_json_safe(data_dir / 'taxonomy.json', taxonomy)

    # Bundle question index
    print("\n[3/5] Bundling question index...")
    q_index = bundle_question_index()
    write_json_safe(data_dir / 'question_index.json', q_index)

    # Copy diagrams
    print("\n[4/5] Copying diagrams...")
    diagram_mb = copy_diagrams(dest_root)

    # Verify encoding
    print("\n[5/5] Verifying encoding safety...")
    all_ok = True
    for json_file in data_dir.glob('*.json'):
        if verify_ascii(json_file):
            print(f"  {json_file.name}: PASS (pure ASCII)")
        else:
            print(f"  {json_file.name}: FAIL")
            all_ok = False

    if not all_ok:
        print("\nENCODING ERRORS DETECTED -- fix before deploying!")
        sys.exit(1)

    # Summary
    total_data_bytes = sum(f.stat().st_size for f in data_dir.glob('*.json'))
    data_mb = total_data_bytes / (1024 * 1024)
    total_mb = data_mb + diagram_mb
    print("\n" + "=" * 60)
    print("Bundle complete!")
    print(f"  Output directory: {dest_root}")
    print(f"  Data files:       {data_mb:.2f} MB")
    print(f"  Diagrams:         {diagram_mb:.1f} MB")
    print(f"  Est. total size:  {total_mb:.1f} MB")
    print(f"  Questions:        {len(questions)}")
    print(f"  Encoding:         ASCII-safe (verified)")
    print("\nNext steps:")
    print("  1. Open GitHub Desktop")
    print("  2. You should see the changed files listed")
    print("  3. Type a commit message (e.g., 'Added 5 new questions')")
    print("  4. Click 'Commit to main'")
    print("  5. Click 'Push origin'")
    print("  6. Students will get the update within ~2 minutes")
    print("=" * 60)


if __name__ == '__main__':
    main()
