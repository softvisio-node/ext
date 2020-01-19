// https://cli.vuejs.org/config/

const webpack = require( "webpack" );

var config = {
    "outputDir": "www",

    "devServer": {
        "contentBase": "build",
        "hot": true,
        "historyApiFallback": true,
        "host": "0.0.0.0",
        "port": "80",
        "disableHostCheck": false,
        "compress": false,
        "inline": true,
        "stats": "none",
    },

    "publicPath": "",

    "pluginOptions": {
        // WebpackBundleAnalyzer, https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin
        "webpackBundleAnalyzer": {
            "openAnalyzer": false,
        },
    },

    // disable lint on development, enable on production
    "lintOnSave": process.env.NODE_ENV === "production" ? "error" : false,

    // NOTE slow
    "productionSourceMap": false,

    "configureWebpack": ( config ) => {
        config.entry = "./lib/latest.js";

        // aliases
        config.resolve.alias["#ext"] = "@softvisio/ext/lib/ext-" + process.env.EXT_VERSION + ".js";
        config.resolve.alias["#ewc"] = "@softvisio/ext/share/ewc-" + process.env.EWC_VERSION;
        config.resolve.alias["#swc"] = "@softvisio/web-components/lib";

        // global vars
        // config.plugins.push( new webpack.ProvidePlugin( {
        //     "Ext": config.resolve.alias["#ext"],
        // } ) );
    },

    "chainWebpack": ( config ) => {
        // disable WebpackBundleAnalyzer
        // config.plugins.delete( "webpack-bundle-analyzer" );

        if ( process.env.NODE_ENV === "production" ) {
            // configure html minification, https://github.com/kangax/html-minifier#options-quick-reference
            config.plugin( "html" ).tap( ( args ) => {
                args[0].minify.removeAttributeQuotes = false;

                return args;
            } );
        }
    },
};

module.exports = config;
// -----SOURCE FILTER LOG BEGIN-----
//
// +-------+---------------+------------------------------+--------------------------------------------------------------------------------+
// | Sev.  | Line:Col      | Rule                         | Description                                                                    |
// |=======+===============+==============================+================================================================================|
// |  WARN | 3:7           | no-unused-vars               | 'webpack' is assigned a value but never used.                                  |
// +-------+---------------+------------------------------+--------------------------------------------------------------------------------+
//
// -----SOURCE FILTER LOG END-----
