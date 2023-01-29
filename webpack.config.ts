import path from "path";
import webpack from "webpack";

import { createWebpackConfig } from "./config/webpack";

const mode = process.env.NODE_ENV;
const isDev = mode === "development";

const config: webpack.Configuration = createWebpackConfig({
  mode,
  paths: {
    entry: path.join(__dirname, "src", "index.ts"),
    build: path.join(__dirname, "dist"),
    html: path.join(__dirname, "public", "index.html"),
  },
  isDev,
});

export default config;
