@echo off

patch --dry-run --forward --reverse -p1 -i patch/patch

patch --quiet --forward --reverse -p1 -i patch/patch
