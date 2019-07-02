const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                // 使用sourcemap调试
                // enforce:pre表示这个loader要在别的loader执行前执行
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist/']),
        
         // 这个插件是生成index.html
        new HtmlWebpackPlugin({
            // 以哪个文件为模板，模板路径
            template: "./src/index.html",
            // 编译后的文件名
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        // 启动热更新,当模块、组件有变化，不会刷新整个页面，而是局部刷新
        // 需要和插件webpack.HotModuleReplacementPlugin配合使用
        hot: true,
        // 静态资源目录
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8081,
        host: '0.0.0.0',
        historyApiFallback: true,
    }
}