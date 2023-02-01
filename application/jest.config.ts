/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import nextJest from 'next/jest'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig: Config = {
  clearMocks: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'jest.tsconfig.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports',
        filename: 'jest-report.html',
      },
    ],
    [
      'jest-sonar',
      {
        outputDirectory: 'reports',
        outputName: 'jest-report.xml',
        reportedFilePath: 'relative',
        relativeRootDir: '<rootDir>/../../',
      },
    ],
  ],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  collectCoverage: true,
  coverageProvider: 'babel',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.*',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!**/pages_stories/**',
    '!**/mocks/**',
    '!**/stubs/**',
    '!**/__tests__/**',
    '!**/reports/**',
    '!**/.storybook/**',
  ],
  coverageDirectory: 'reports',
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/.next/',
    '/.storybook/',
    '/page_stories/',
    '/mocks/',
    '/stubs/',
  ],
  setupFiles: [`<rootDir>/__tests__/jest.shim.ts`],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__tests__/__mocks__/style.mock.ts',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__tests__/__mocks__/file.mock.ts`,
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
