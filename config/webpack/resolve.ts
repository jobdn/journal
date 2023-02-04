import path from "path/posix";
import webpack from "webpack";
import { WebpackConfigOptions } from "./types/config";

export function webpackResolve(
  options: WebpackConfigOptions
): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [options.paths.src, "node_modules"],
  };
}
