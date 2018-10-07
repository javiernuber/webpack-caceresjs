const path = require('path');

module.exports = {
    mode: "development",
    entry: "./examples/entry-output/src/index", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    }
}