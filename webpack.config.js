const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: "development"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src'),
    ]
  }
};
