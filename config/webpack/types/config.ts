type WebpackConfigMode = "production" | "development";

export interface WebpackConfigPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface WebpackEnv {
  mode: WebpackConfigMode;
  port: number;
  api: string;
}

export interface WebpackConfigOptions {
  mode: WebpackConfigMode;
  paths: WebpackConfigPaths;
  isDev: boolean;
  port: number;
  api: string;
  project: "frontend" | "storybook" | "jest";
}
