const ExtWebpackPlugin = require( "@sencha/ext-webpack-plugin" );
const path = require( "path" );

module.exports = {
    "outputDir": path.join( __dirname, "build" ),
    "configureWebpack": {
        "plugins": [
            new ExtWebpackPlugin( {
                "framework": "web-components",
                "toolkit": "modern",
                "emit": "yes",
                "browser": "no",
                "packages": [

                    // "charts",
                    // ux,
                    // google,
                    // "d3",
                    // "froala-editor"
                ],
                "packageDirs": [

                    // "./packages", // path, where custom packages located, names of this packages can be used in the "packages" option
                ],
                "profile": "",
                "verbose": "no",
                "treeshake": "no",
                "environment": "development",
            } ),
        ],
    },
};
