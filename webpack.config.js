module.exports = {
    "entry": "./lib/index.js",
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                },
            },
            {
                "test": /\.css$/i,
                "use": ["style-loader", "css-loader"],
            },
            {
                "test": /\.(svg)(\?.*)?$/,
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "img/[name].[hash:8].[ext]",
                        },
                    },
                ],
            },
            {
                "test": /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "fonts/[name].[hash:8].[ext]",
                                },
                            },
                        },
                    },
                ],
            },
            {
                "test": /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "img/[name].[hash:8].[ext]",
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
};
