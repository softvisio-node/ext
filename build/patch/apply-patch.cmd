@echo off

patch --dry-run --forward -p1 -i patch/patch

patch --quiet --forward -p1 -i patch/patch
