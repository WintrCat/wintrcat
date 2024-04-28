const { resolve } = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: resolve("./dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@pages": resolve("./src/pages"),
            "@components": resolve("./src/components")
        },
        extensions: [".tsx", ".ts", ".json", ".js", ".jsx"]
    },
    mode: "development"
};