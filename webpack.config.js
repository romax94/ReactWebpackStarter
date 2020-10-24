const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: {
        alias: {
            constants: path.resolve(__dirname, 'src/constants'),
            services: path.resolve(__dirname, 'src/services'),
        }
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    }
}
