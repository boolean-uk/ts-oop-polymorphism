/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@attack/(.*)$': '<rootDir>/src/attack/$1',
    '^@dice/(.*)$': '<rootDir>/src/dice/$1',
    '^@character/(.*)$': '<rootDir>/src/character/$1'
  }
}
