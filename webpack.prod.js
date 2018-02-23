const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');
const extractSCSS = new ExtractTextPlugin({filename: '[name].css', allChunks: true});

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        extractSCSS
    ],
    output: {
        filename: '[name].[hash:7].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: srcDir,
                use: extractSCSS.extract(['css-loader', 'sass-loader'])
            }
        ]
    }
});
