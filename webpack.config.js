const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
        generator: {
          filename: "image/[name][ext]",
        },
      },
      {
        test: /fonts.*\.+(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: { filename: "fonts/[name][ext]" },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    compress: false,
    open: "/",
    port: 3001,
  },
};
