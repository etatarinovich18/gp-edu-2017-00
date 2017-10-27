const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [ path.resolve(__dirname, 'app/app.js') ,
                path.resolve(__dirname, 'app/style/sass/style.scss') ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'style/[name].bundle.css',
            allChunks: true,
        })
    ]

};
