/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    entry: path.resolve(__dirname, './src/ts/index.ts'),
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [],
    },
    plugins: [
        // avoid import jquery lib in any *.ts
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: './index.html', // 配置文件模板
        }),
    ],
    externals: {
        // excluding dependencies from the output bundles.
        // if use cdn script import lib , uncomment the next lines.
        // jquery: '$',
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    },
    devtool: 'source-maps',
    devServer: {
        // contentBase: path.join('/dist/'),
        stats: 'errors-only',
        inline: true,
        host: '127.0.0.1',
        port: 5050,
    },
});
