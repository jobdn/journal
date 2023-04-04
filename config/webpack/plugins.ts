import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyPlugin from "copy-webpack-plugin";
import { WebpackConfigOptions } from "./types/config";

export function webpackPlugins(
  options: WebpackConfigOptions
): webpack.WebpackPluginInstance[] {
  const basePlugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev,
      __API__: JSON.stringify(options.api),
      __PROJECT__: JSON.stringify(options.project),
    }),
    new webpack.HotModuleReplacementPlugin(),

    new CopyPlugin({
      patterns: [
        { from: options.paths.locales, to: options.paths.buildLocales },
      ],
    }),
  ];

  if (options.isDev) {
    basePlugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
  }

  return basePlugins;
}
