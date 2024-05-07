const path = require('path');

module.exports = {
    entry: ["./src/adapters/handlers/user.ts"],
    mode: "development",
    target: "node",
    module: {
        rules: [
            {
                test: /^.+\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs"
    }
}