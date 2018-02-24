var webpack = require("webpack");
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
var ROOT_PATH = path.join(__dirname, '../'); // 项目根目录
var MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
var BUILD_PATH = path.join(ROOT_PATH, './dist'); // 最后输出放置公共资源的目录
//用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry:{
        "hh": __dirname + "/re.js",//已多次提及的唯一入口文件
    },
    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin()//插件。优化。代码压缩
    // ],
    output: {
        path: __dirname + "/",//打包后的文件存放的地方
        //publicPath: "http://localhost:8080/public/",//打包后从新引入该文件
        filename: "[name]all.js"//打包后输出文件的文件名
    },

    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin()//插件。优化。代码压缩
    // ],
    devServer: {
        quiet: false, //控制台中不输出打包的信息
        noInfo: false,
        hot: true,
        inline: true,
        lazy: false,
        progress: true, //显示打包的进度
        watchOptions: {
            aggregateTimeout: 300
        },
    },
       module: {
        rules: [
            {
                 test:/\.(css|style)$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
           },
            {
                test: /\.(eot|woff|png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    'url?limit=10000&name=img/[name].[ext]'
                ]
            },
         ]
       }
};