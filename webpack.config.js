const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
module.exports = {

    entry: path.join(__dirname, "examples/src/index.js"),
    output: {

        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js",
        sourceMapFilename: "[name].js.map"

    },
    devtool: "source-map",
    module: {

        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: [path.resolve(__dirname, 'node_modules')],
                type: "javascript/auto"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", "@babel/preset-react"
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-proposal-class-properties", {
                                    "loose": true
                                }
                            ]
                        ]
                    }
                }
            }, {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader', {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]

            },
            {

                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                  
                            name: 'images/[hash]-[name].[ext]',
                          
                            outputPath: '/src/images/'
                        }
                    }
                ]
            }
        
            , {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        htmlWebpackPlugin, new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx", "json", "css"]
    },
    devServer: {
        port: 3001,
        compress: true,
        hot: true
    }
};