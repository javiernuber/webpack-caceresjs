const path = require('path');

module.exports = {
    mode: "production",
    entry: "./examples/entry-output/src/index", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    }
}