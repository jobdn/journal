// TODO: У Ulbi нет типа string в конце, это я уже определил, чтобы использовать переменную окружения в файле конфига. Если будут ошибки, то удалить
type WebpackConfigMode = "production" | "development" | string;

export interface WebpackConfigPaths {
  entry: string;
  build: string;
  html: string;
}

export interface WebpackConfigOptions {
  mode: WebpackConfigMode;
  paths: WebpackConfigPaths;
  isDev: boolean;
}
