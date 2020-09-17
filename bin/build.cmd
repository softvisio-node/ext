@echo off

setlocal

set TARGET=d:\downloads

pushd %TARGET%

call npm i -g @vue/cli

call vue create --default ext-build

cd ext-build

call npm install @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
call npm install @sencha/ext-web-components-modern @sencha/ext-webpack-plugin

cp "%~dp0/vue.config.js" "%TARGET%\ext-build\vue.config.js"

:: TODO not exited
call npx vue-cli-service build

:: prepare resources
del build\ext\resources\Readme.md
rmdir /S /Q build\ext\resources\ext
rmdir /S /Q build\ext\resources\font-awesome
rmdir /S /Q build\ext\resources\images\pictos

popd

pause
