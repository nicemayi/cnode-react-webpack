const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        index: path.resolve(__dirname, '..', 'client', 'server-entry.js'),
    },
    output: {
        filename: 'server-entry.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/public/',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: [
                    path.resolve(__dirname, '..', 'node_modules'),
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, '..', 'node_modules'),
                ],
                loader: 'babel-loader',
            },
        ],
    },
};