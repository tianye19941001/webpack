var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry:'./src/app.js',
    output:{
        path:__dirname + '/dist/js/',
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname,'node_modules'),
                include: path.resolve(__dirname,'src'),
                options:{
                    presets:['env']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{
                    loader: "postcss-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.html/,
                use: 'html-loader'
            },
            {
                test: /\.tpl/,
                use: 'ejs-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: "url-loader",
                    options:{
                        limit: 10000,
                        name:'assets/[name]-[hash:5].[ext]'
                    }
                }, {
                    loader: "image-webpack-loader"
                }],

            }

        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}