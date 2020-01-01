// https://cli.vuejs.org/config/

const webpack = require( "webpack" );

module.exports = {
    "devServer": {
        "contentBase": "build",
        "hot": true,
        "historyApiFallback": true,
        "host": "0.0.0.0",
        "port": "8080",
        "disableHostCheck": false,
        "compress": false,
        "inline": true,
        "stats": "none",
    },

    // disable lint on development, enable on production
    "lintOnSave": process.env.NODE_ENV === "production" ? "error" : false,

    "configureWebpack": ( config ) => {
        config.entry = "./lib/latest.js";

        config.plugins.push( new webpack.ProvidePlugin( {
            "Ext": "@softvisio/ext",
        } ) );

        if ( process.env.NODE_ENV === "production" ) {
            //
        }
        else if ( process.env.NODE_ENV === "development" ) {
            //
        }
    },

    "chainWebpack": ( config ) => {
        if ( process.env.NODE_ENV === "production" ) {
            // configure html minification, https://github.com/kangax/html-minifier#options-quick-reference
            config.plugin( "html" ).tap( ( args ) => {
                args[0].minify.removeAttributeQuotes = false;

                return args;
            } );
        }
        else if ( process.env.NODE_ENV === "development" ) {
            // disable minification in development mode
            config.optimization.minimize( false );
            // config.optimization.delete( "splitChunks" );
        }
    },
};
