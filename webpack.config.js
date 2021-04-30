const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ],
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "_redirects",
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
