// node.js 内置包
var path = require('path')
// web pack包
var webpack = require('webpack')


module.exports = {
    // 定义js入口文件
    entry: './src/js/app.js',
    output: {
        // 最后输出的路径 需要绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 最后输出的整个js文件
        filename: 'bundle.js',
        // where dev server
        publicPath: '/dist'
    },
    // 这里定义了webpack会怎样对待你的module
    // 那些import都可以看成是module，css文件也可以看成是module
    module: {
      rules: [
          // 每一条rule都是一个javascript对象
          {
              // rule作用于的文件
              test: /\.css$/,
              use: [
                  // 有顺序要求，从底向上进行导入
                  // webpack 执行逆向执行loader
                  // loader用来translate javascript code
                  'style-loader',
                  'css-loader'
              ]
          }
      ]
    },
    // plugins作用于最后的生成的bundle.js
    // npm install webpack-dev-server@~2.7.0 --save-dev
    // 有版本问题 要降低版本
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]

};
