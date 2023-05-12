export default {
  clearMocks: true,
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  rootDir: "../..",
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/config/jest/setupTests.ts",
    "<rootDir>/src/shared/config/i18n/i18nForTests.ts",
  ],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/config/jest/mockSvg.tsx",
  },
  globals: {
    __IS_DEV__: true,
    __API__: "http://localhost:8000",
    __PROJECT__: "jest",
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "<rootDir>/reports/unit/",
        filename: "report.html",
        openReport: true,
        inlineSource: true,
      },
    ],
  ],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};
