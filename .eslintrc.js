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
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "jsx-a11y",
    "awesome-fsd-imports",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "react/display-name": "off",
    "jsx-a11y/click-events-have-key-events": "off", // TODO: вернуться к этому правилу
    "jsx-a11y/no-static-element-interactions": "off", // TODO: вернуться к этому правилу
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "awesome-fsd-imports/relative-imports": 2,
  },
  overrides: [
    {
      files: ["src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
