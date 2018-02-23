const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
    // 配置source map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // 配置服务器外部可访问
        // host: "0.0.0.0",

        // 支持HMR（热替换），需要配合new webpack.HotModuleReplacementPlugin()插件一起使用
        // 也可以在CLI中使用--hot开启，就不需要配置hot字段和插件了
        // 例：webpack-dev-server --open --hot
        // hot: true,

        // 告诉服务器从哪里提供内容(只有在你想要提供静态文件时才需要)
        contentBase: distDir,
        port: 3000,
        // 设置任意404响应都被替代为index.html，设置BrowserRouter路由时配合使用
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: srcDir,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});

