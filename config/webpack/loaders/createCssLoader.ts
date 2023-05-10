import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const createCssLoader = (isDev: boolean) => ({
  test: /\.(sc|sa|c)ss$/i,
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
});
