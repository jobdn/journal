import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackConfigOptions } from "./types/config";

export function webpackLoaders({
  isDev,
}: WebpackConfigOptions): webpack.RuleSetRule[] {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:4]"
              : "[hash:base64:6]",
          },
        },
      },
      "sass-loader",
    ],
  };

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
