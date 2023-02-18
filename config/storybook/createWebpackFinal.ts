import path from "path";
import webpack from "webpack";

import { createCssLoader } from "../webpack/loaders/createCssLoader";

export const createWebpackFinal = async (config: webpack.Configuration) => {
  config.resolve.modules.push(path.join(__dirname, "..", "..", "src"));
  config.mode = "development";

  config.module.rules.push(createCssLoader(true));

  const fileLoaderRule = config.module.rules.find(
    (rule: webpack.RuleSetRule) =>
      rule.test && (rule.test as RegExp).test(".svg")
  ) as webpack.RuleSetRule;

  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
