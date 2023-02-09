import { WebpackConfigOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

// Если не определить эту функцию, ts не будет подсказывать, что в концигурации webpack есть такое свойство, как devServer.
// И тут уже получается неочевидность, потому что если не определить эту фукнцию, то в файле создания конфига не будет предложено добавить опцию, для devServer - как найти очевидность?
export function webpackDevServer(
  options: WebpackConfigOptions
): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
