module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "i18next", "no-comments"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "react/display-name": "off",
    "no-comments/disallowComments": [
      "error",
      {
        allow: [
          "TODO",
          "FIXME",
          "NOTE",
          "DEBUG",
          "@ts-ignore",
          "eslint-disable-next-line",
          "eslint-disable",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
