const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.jsx',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    output: {
        path: distDir,
        filename: '[name].bundle.js',
        // 设置外部资源（如图片，文件，js等）输出的路径前缀，应始终相对于根目录
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: srcDir,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: srcDir,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // 会重载output.publicPath
                        publicPath: '/assets/',
                        outputPath: 'assets/'
                    }
                }]
            }
        ]
    }
};

