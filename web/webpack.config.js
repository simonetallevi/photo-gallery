var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Photo Gallery',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: 'index.ejs'
        }),
        new ExtractTextWebpackPlugin({ filename: 'app.css', disable: false, allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" })
    ]
};