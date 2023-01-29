import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { WebpackConfigPaths } from "./types/config";

// TODO: check webpack types
export function webpackPlugins(
  paths: WebpackConfigPaths
): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
}
