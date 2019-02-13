const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const htmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugins(
            {
                template:path.join(__dirname,'./src/index.html'),
                filename:'index.html',
                //指定模板页面，将来根据指定的页面路径，去生成内存的页面
                inject:"body"
            }
        ),//创建一个在内存中生成html页面的插件
        new VueLoaderPlugin()
    ],
    //用于配置所有的第三方模块加载器
    module: {
        //第三方模块匹配规则
        rules:[
            {test: /\.css$/,use:['style-loader','css-loader']},
            //以上是配置css第三方loader规则的方式
            {test:/\.jpg|png|gif|bmp|jpeg$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias: {
            "vue$":"vue/dist/vue.js"
        }
    },

}
// --legacy - bundling