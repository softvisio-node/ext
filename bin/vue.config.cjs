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
                "packages": ["charts", "d3", "froala-editor"],
                "profile": "",
                "verbose": "no",
                "treeshake": "no",
                "environment": "development",
            } ),
        ],
    },
};
