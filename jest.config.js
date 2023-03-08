module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/pages/**/*.ts(x)",
    "!src/styles/**/*.ts(x)",
    "!src/utils/*.ts(x)",
    "!src/types/**/*.d.ts",
  ],
};
