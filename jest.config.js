export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	resetMocks: false,
    setupFiles: ["jest-localstorage-mock"]
};