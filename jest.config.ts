import type {Config} from 'jest';
import nextJest from 'next/jest.js'


const jestConfig: Config = {
    testEnvironment: 'jest-environment-jsdom',
    verbose: true
};

const nextConfig = nextJest({
    dir: "./"
})

// export default config;
export default nextConfig(jestConfig)