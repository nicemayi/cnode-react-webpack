const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/public/',
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
