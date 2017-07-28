var HtmlWebpackPlugin = require('html-webpack-plugin');
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
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Photo Gallery',
                filename: 'index.html',
                template: 'index.ejs'
            }),
            new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename: "vendor.bundle.js"})
        ]
};