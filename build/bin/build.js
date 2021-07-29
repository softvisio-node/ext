#!/usr/bin/env node

import fs from "fs";
import module from "module";

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
