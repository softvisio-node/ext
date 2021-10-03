#!/usr/bin/env node

import fs from "fs";
import module from "module";
import path from "path";
import childProcess from "childProcess";

// patch trial version
{
    const path = module.createRequire( import.meta.url ).resolve( "@sencha/ext-modern-theme-base/sass/etc/all.scss" );

    const content = fs.readFileSync( path, "utf8" );

    // not patched
    if ( content.includes( "$ext-trial: true!default;" ) ) {
        console.log( "Trial variable patched" );

        const patched = content.replace( "$ext-trial: true!default;", "$ext-trial: false!default;" );

        fs.writeFileSync( path, patched );
    }
}

// remove font-awesome
{
    const path = module.createRequire( import.meta.url ).resolve( "@sencha/ext-font-awesome/sass/src/all.scss" );
    fs.writeFileSync( path, "" );
}

// build
const rootDir = path.dirname( module.createRequire( import.meta.url ).resolve( "#root/package.json" ) ),
    dataDir = path.join( rootDir, "data" ),
    srcDir = path.join( rootDir, "build/ext" );

if ( fs.existsSync( dataDir ) ) fs.rmSync( dataDir, { "recursive": true, "force": true } );

fs.mkdirSync( dataDir, { "recursive": true } );

childProcess.spawnSync( "npx", ["sencha", "--cwd", srcDir, "app", "build", "development"], { "cwd": dataDir, "stdio": "inherit", "shell": true } );

// cleanup
fs.rmSync( dataDir + "/ext.scss", { "recursive": true, "force": true } );
fs.rmSync( dataDir + "/resources/Readme.md", { "recursive": true, "force": true } );
fs.rmSync( dataDir + "/resources/ext", { "recursive": true, "force": true } );
fs.rmSync( dataDir + "/resources/font-awesome", { "recursive": true, "force": true } );
fs.rmSync( dataDir + "/resources/images/pictos", { "recursive": true, "force": true } );

// fix: url(images/tree/loading.gif) -> url(resources/images/tree/loading.gif)
{
    let content = fs.readFileSync( dataDir + "/ext_1.css", "utf8" );
    content = content.replaceAll( "url(images/tree/loading.gif)", "url(resources/images/tree/loading.gif)" );
    fs.writeFileSync( dataDir + "/ext_1.css", content );
}

// fix: align-items: start; -> align-items: flex-start;
{
    let content = fs.readFileSync( dataDir + "/ext_1.css", "utf8" );
    content = content.replaceAll( "align-items: start;", "align-items: flex-start;" );
    fs.writeFileSync( dataDir + "/ext_1.css", content );
}

// fix: display: box; -> display: flex;
{
    let content = fs.readFileSync( dataDir + "/ext_2.css", "utf8" );
    content = content.replaceAll( "display: box;", "display: flex;" );
    fs.writeFileSync( dataDir + "/ext_2.css", content );
}

// patch: css-vars.js
{
    let content = fs.readFileSync( dataDir + "/css-vars.js", "utf8" );
    content = content.replace( "(function (f) {", "(function (f) { window.Fashion = f(); return;" );
    fs.writeFileSync( dataDir + "/css-vars.js", content );
}

// extract charts code
{
    const ext = fs.readFileSync( dataDir + "/ext.js", "utf8" );
    const idx = ext.indexOf( `Ext.define('Ext.draw.ContainerBase'` );
    fs.writeFileSync( dataDir + "/ext.js", ext.substring( 0, idx ) + "window.Ext = Ext;\n" );
    fs.writeFileSync( dataDir + "/charts.js", ext.substr( idx ) );
}

// lint
{
    childProcess.spawnSync( "softvisio-cli", ["lint", "**/*.css", "--action=compress"], { "cwd": dataDir, "stdio": "inherit", "shell": true } );
    childProcess.spawnSync( "softvisio-cli", ["lint", "**/*.css"], { "cwd": dataDir, "stdio": "inherit", "shell": true } );
}
