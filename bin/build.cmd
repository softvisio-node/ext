@echo off

setlocal

set TARGET=%~dp0
set NAME=ext-build

set BUILD_DIR=%TARGET%\%NAME%

pushd %TARGET%

call npx vue create --default %NAME%

cd %BUILD_DIR%

call npm install @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
call npm install @sencha/ext-web-components-modern @sencha/ext-webpack-plugin

cp "%~dp0/vue.config.js" "%BUILD_DIR%\vue.config.js"

:: TODO not exited
call npx vue-cli-service build

:: prepare resources
del build\ext\resources\Readme.md
rmdir /S /Q build\ext\resources\ext
rmdir /S /Q build\ext\resources\font-awesome
rmdir /S /Q build\ext\resources\images\pictos

popd

pause
