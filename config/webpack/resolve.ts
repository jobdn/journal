import webpack from "webpack";

export function webpackResolve(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
