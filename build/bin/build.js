#!/usr/bin/env node

import fs from "fs";
import module from "module";
import path from "path";
import child_process from "child_process";

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

    // content = content.replace();
}

// build
const rootDir = path.dirname( module.createRequire( import.meta.url ).resolve( "#root/package.json" ) ),
    dataDir = path.join( rootDir, "data" );

if ( fs.existsSync( dataDir ) ) fs.rmSync( dataDir, { "recursive": true, "force": true } );

fs.mkdirSync( dataDir, { "recursive": true } );

child_process.spawnSync( "npx", ["sencha", "app", "build", "development"], { "cwd": dataDir, "stdio": "inherit", "shell": true } );
