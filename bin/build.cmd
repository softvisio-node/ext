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

:: remove "resources/images/pictos"
rmdir /S /Q build\ext\resources\images\pictos\

:: remove watermark
rmdir /S /Q build\ext\resources\ext\

:: remove font awesome
rmdir /S /Q build\ext\resources\font-awesome\

:: patch css files
:: - remove watermark
:: - remove fontawesome
:: - fix errors

:: src -a compress -t css build\ext
:: src -a decompress -t css build\ext

:: patch ext.js, add module.exports = Ext;

:: patch css-vars.js

popd

pause
