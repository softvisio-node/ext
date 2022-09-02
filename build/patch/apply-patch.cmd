@echo off

patch -d "%~dp0%.." --dry-run --forward -p1 -i patch/patch

patch -d "%~dp0%.." --quiet --forward -p1 -i patch/patch
