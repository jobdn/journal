import path from "path";
import webpack from "webpack";

import { createWebpackConfig, WebpackEnv } from "./config/webpack";

export default (env: WebpackEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  return createWebpackConfig({
    mode,
    paths: {
      entry: path.join(__dirname, "src", "index.ts"),
      build: path.join(__dirname, "dist"),
      html: path.join(__dirname, "public", "index.html"),
    },
    isDev,
    port,
  });
};
