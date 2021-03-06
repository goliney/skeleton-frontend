const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildDir = path.resolve(__dirname, "build");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: buildDir
  },
  devtool: "source-map",
  devServer: {
    contentBase: buildDir,
    open: true,
    inline: true,
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Change me in webpack.config.js",
      hash: true,
      showErrors: true,
      template: "src/index.html"
    })
  ]
};

module.exports = config;
