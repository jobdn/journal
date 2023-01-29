import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;
