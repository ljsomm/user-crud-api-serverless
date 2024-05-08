module.exports = {
    preset: "ts-jest",
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    collectCoverageFrom: ["./src/**/*.ts"],
    coverageReporters: ["json", "json-summary", "text"],
}