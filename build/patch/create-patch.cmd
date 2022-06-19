@echo off

diff --recursive --no-ignore-file-name-case -u ../node_modules node_modules | grep -v "^Only in" > patch
