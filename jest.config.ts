import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
