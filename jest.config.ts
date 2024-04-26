import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});
const config: Config = {
    coverageProvider: 'babel',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['setupTests.js'],
};
export default createJestConfig(config);
