import webpack from "webpack";

import { webpackLoaders } from "./loaders";
import { webpackPlugins } from "./plugins";
import { webpackResolve } from "./resolve";
import { webpackDevServer } from "./devServer";

import { WebpackConfigOptions } from "./types/config";

export function createWebpackConfig(
  options: WebpackConfigOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash:8].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolve(options),
    plugins: webpackPlugins(options),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? webpackDevServer(options) : undefined,
  };
}
