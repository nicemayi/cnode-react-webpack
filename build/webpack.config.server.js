const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

module.exports = webpackMerge(baseConfig, {
    target: 'node',
    entry: {
        index: path.resolve(__dirname, '..', 'client', 'server-entry.js'),
    },
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2',
    },
});
