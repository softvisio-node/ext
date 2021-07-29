@echo off

setlocal

set NAME=ext-build
set TARGET=%~dp0\..\data
set BUILD_DIR=%TARGET%\%NAME%

mkdir %TARGET%
pushd %TARGET%

call npx vue create --default %NAME%

cd %BUILD_DIR%

:: @sencha/ext-d3
:: @sencha/ext-froala-editor
call npm install @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material @sencha/ext-charts @sencha/ext-ux @sencha/ext-google
call npm install @sencha/ext-web-components-modern @sencha/ext-webpack-plugin

cp "%~dp0/vue.config.cjs" "%BUILD_DIR%\vue.config.cjs"

call npx vue-cli-service build

:: prepare resources
del build\ext\resources\Readme.md
rmdir /S /Q build\ext\resources\ext
rmdir /S /Q build\ext\resources\font-awesome
rmdir /S /Q build\ext\resources\images\pictos

popd

pause
