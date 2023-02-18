import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackConfigOptions } from "./types/config";
import { createCssLoader } from "./loaders/createCssLoader";

export function webpackLoaders({
  isDev,
}: WebpackConfigOptions): webpack.RuleSetRule[] {
  const scssLoader = createCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };

  return [babelLoader, typescriptLoader, scssLoader, svgLoader, fileLoader];
}
