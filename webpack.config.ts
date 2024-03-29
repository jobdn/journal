import path from "path";

import { createWebpackConfig, WebpackEnv } from "./config/webpack";

export default (env: WebpackEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";
  const api = process.env.api || env.api || "http://localhost:8000";

  return createWebpackConfig({
    mode,
    paths: {
      entry: path.join(__dirname, "src", "index.tsx"),
      build: path.join(__dirname, "dist"),
      html: path.join(__dirname, "public", "index.html"),
      src: path.join(__dirname, "src"),
      locales: path.join(__dirname, "public", "locales"),
      buildLocales: path.join(__dirname, "dist", "locales"),
    },
    isDev,
    port,
    api,
    project: "frontend",
  });
};
