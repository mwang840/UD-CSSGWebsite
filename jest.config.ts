import type { Config } from "jest";

const config: Config = {
  moduleDirectories: ["src", "src/components", "node_modules"],
  moduleNameMapper: {
    "^@/components/pages/(.*)$": "<rootDir>/src/components/pages/$1",
    "^@/components/assets/(.*)$": "<rootDir>/src/mocks/imgmock.ts",
    "^.+\\.(css|less)$": "<rootDir>/src/mocks/cssmock.ts",
    "^@/components/common/(.*)$": "<rootDir>/src/components/common/$1",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  injectGlobals: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupfiles.ts"],
};

export default config;
