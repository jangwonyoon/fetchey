/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  preset: 'ts-jest',

  // 테스트 커버리지 최소 기준
  coverageThreshold: {
    './src/': {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};
