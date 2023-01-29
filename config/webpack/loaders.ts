import webpack from "webpack";

// Сам бы я не догадался, чтобы использовать типы для вебпака
export function webpackLoaders(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ];
}
