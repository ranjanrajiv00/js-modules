const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinimizeTerserPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');


//make sure that the chunks in cachegroups line up with our entry points.
function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}


module.exports = {
    mode: "production",
    devtool: 'source-map',
    entry: {
        app: ['./src/app/app.js', './src/assets/css/app.css', './src/assets/css/main.css'],
        cart: ['./src/app/cart.js', './src/assets/css/cart.scss'],
        plp: './src/app/plp.js',
        pdp: './src/app/pdp.js',
    },
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new MinimizeTerserPlugin({
                sourceMap: true
            }),
            new CssMinimizerWebpackPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                thirdParty: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1
                },
            }
        }
    },
    devServer: {
        port: 5050,
        writeToDisk: true
    }
}