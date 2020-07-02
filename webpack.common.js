const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.svg"
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.woff2$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "var"
  },
};
