const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
