module.exports = {
    "entry": "./extjs-v7.1.0.js",
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                },
            },
        ],
    },
};
