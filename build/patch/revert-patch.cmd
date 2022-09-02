@echo off

patch -d "%~dp0%.." --dry-run --forward --reverse -p1 -i patch/patch || exit /B 1

patch -d "%~dp0%.." --quiet --forward --reverse -p1 -i patch/patch || exit /B 1
