#!/usr/bin/env node

import fs from "node:fs";
import module from "node:module";
import path from "node:path";
import childProcess from "node:child_process";

const rootDir = path.dirname( module.createRequire( import.meta.url ).resolve( "#root/package.json" ) ),
    dataDir = path.join( rootDir, "data" ),
    srcDir = path.join( rootDir, "src/app" );

// apply patch
{
    let res = childProcess.spawnSync( "patch", [ "--dry-run", "--forward", "-p1", "-i", "patch/patch" ], {
        "cwd": rootDir,
        "shell": true,
        "stdio": "inherit",
    } );

    if ( res.status ) process.exit();

    res = childProcess.spawnSync( "patch", [ "--quiet", "--forward", "-p1", "-i", "patch/patch" ], {
        "cwd": rootDir,
        "shell": true,
        "stdio": "inherit",
    } );

    if ( res.status ) process.exit();
}

// patch trial version
// {
//     const path = module.createRequire( import.meta.url ).resolve( "@sencha/ext-modern-theme-base/sass/etc/all.scss" );

//     const content = fs.readFileSync( path, "utf8" );

//     // not patched
//     if ( content.includes( "$ext-trial: true!default;" ) ) {
//         console.log( "Trial variable patched" );

//         const patched = content.replace( "$ext-trial: true!default;", "$ext-trial: false!default;" );

//         fs.writeFileSync( path, patched );
//     }
// }

// remove font-awesome
// {
//     const path = module.createRequire( import.meta.url ).resolve( "@sencha/ext-font-awesome/sass/src/all.scss" );
//     fs.writeFileSync( path, "" );
// }

// build
if ( fs.existsSync( dataDir ) ) fs.rmSync( dataDir, { "recursive": true, "force": true } );

fs.mkdirSync( dataDir, { "recursive": true } );

const res = childProcess.spawnSync( "npx", [ "sencha", "--cwd", `"${ srcDir }"`, "app", "build", "development" ], {
    "cwd": dataDir,
    "shell": true,
    "stdio": "inherit",
} );
if ( res.status ) process.exit( res.status );

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

// fix: .x-froala .second-toolbar -> .x-froala .fr-second-toolbar
{
    let content = fs.readFileSync( dataDir + "/ext_2.css", "utf8" );
    content = content.replaceAll( ".x-froala .second-toolbar {", ".x-froala .fr-second-toolbar {" );
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
    let res = childProcess.spawnSync( "softvisio-cli", [ "lint", "**/*.css", "--action=compress" ], {
        "cwd": dataDir,
        "shell": true,
        "stdio": "inherit",
    } );
    if ( res.status ) process.exit( res.status );

    res = childProcess.spawnSync( "softvisio-cli", [ "lint", "**/*.css" ], {
        "cwd": dataDir,
        "shell": true,
        "stdio": "inherit",
    } );
    if ( res.status ) process.exit( res.status );
}
