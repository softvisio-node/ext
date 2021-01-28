@echo off

setlocal

set TARGET=%~dp0
set NAME=ext-build

set BUILD_DIR=%TARGET%\%NAME%

pushd %TARGET%

npx vue create --default %NAME%

exit /B

cd %BUILD_DIR%

npm install @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
npm install @sencha/ext-web-components-modern @sencha/ext-webpack-plugin

cp "%~dp0/vue.config.js" "%BUILD_DIR%\vue.config.js"

:: TODO not exited
npx vue-cli-service build

:: prepare resources
del build\ext\resources\Readme.md
rmdir /S /Q build\ext\resources\ext
rmdir /S /Q build\ext\resources\font-awesome
rmdir /S /Q build\ext\resources\images\pictos

popd

pause
