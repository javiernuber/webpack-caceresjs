const path = require('path');

module.exports = {
    mode: "production",
    entry: "./p1/src/index", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    }
}