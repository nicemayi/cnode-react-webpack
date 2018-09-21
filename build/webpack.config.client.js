const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
    entry: {
        index: path.resolve(__dirname, '..', 'client', 'index.js'),
    },
    output: {
        filename: '[name].[hash].js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '..', 'client', 'index.html'),
        }),
    ],
});

if (isDev) {
    config.entry = {
        index: [
            'react-hot-loader/patch',
            path.resolve(__dirname, '..', 'client', 'index.js'),
        ],
    };
    config.devServer = {
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.resolve(__dirname, '..', 'dist'),
        hot: true,
        overlay: {
            errors: true,
        },
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html',
        },
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
};

module.exports = config;
