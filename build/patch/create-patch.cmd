@echo off

diff --recursive --no-ignore-file-name-case -u ../node_modules node_modules_patch | grep -v "^Only in" > patch
