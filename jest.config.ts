/* eslint-disable node/no-unpublished-import -- disabled */
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
