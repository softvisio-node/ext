@echo off

patch -d "%~dp0%.." --dry-run --forward --reverse -p1 -i patch/patch

patch -d "%~dp0%.." --quiet --forward --reverse -p1 -i patch/patch
