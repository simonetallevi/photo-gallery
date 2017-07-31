var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var Webpack = require('webpack');
var BootstrapEntryPoint = require('./webpack.bootstrap.config')

var isProd = process.env.NODE_ENV == 'prod';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
});
var cssConfig = isProd ? cssProd : cssDev;
var bootstrapConfig = isProd ? BootstrapEntryPoint.prod : BootstrapEntryPoint.dev;

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: [
            bootstrapConfig,
            'angular',
            'angular-ui-router',
            'angular-ui-bootstrap'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: cssConfig },
            { test: /\.(jpg|png)$/, use: 'file-loader?name=[hash:12].[ext]&outputPath=img/' },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader' }
        ]
    },
    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 9000,
        hot: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Photo Gallery',
            filename: 'index.html',
            template: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'partials/home/home.html',
            template: 'partials/home/home.html',
            minify: {
                collapseWhitespace: true
            },
            inject: 'body',
            chunks: [],
            allChunks: false
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin(),
        new ExtractTextWebpackPlugin({
            filename: '[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })
    ]
}