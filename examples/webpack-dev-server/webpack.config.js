const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname), // Ruta por defecto: dist
    open: true, // Abre una pestaña en el navegador
    compress: true, // Comprime los archivos (gzip)
    publicPath: "/dist/",  // Los archivos estarán disponibles en esa ruta
    stats: "errors-only", // Solo vamos a ver los mensajes que sean error.
    port: 9000// Puerto 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config;
