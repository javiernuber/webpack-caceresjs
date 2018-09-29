const path = require('path');

module.exports = {
    mode: "development",
    entry: "./p2/src/index", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    }
}