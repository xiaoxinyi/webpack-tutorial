var path = require('path');
// 会把最后生成的CSS文件 放在一个单独的文件当中
// 不然我们需要style-loader
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 重新组织html
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    // 考虑兼容性
                    // 配置option
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                // wrap loader in plugin
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                // 把js插入到html中 不用自己手动写入
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // 替代的名字
                        options: {
                            name: '[name].[ext]',
                            // 默认会copy 并放到dist文件夹中
                            outputPath: 'img/',
                            // html用来引用的路径
                            publicPath: './'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dsit'])
    ]
};