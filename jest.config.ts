const configWithJest = require("./src/shared/lib/configure/configure.ts")
const config = require("./tsconfig.json")



export default {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    ...configWithJest.configWithJest(config.compilerOptions.paths),
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.module\\.sass$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./setupTest.ts'],
}