const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const mode = process.env.MODE || 'development';
const filename = mode === 'development' ? 'bundle.js' : 'prod.js';

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode,
  module: {
    rules: [{
      test: /\.jsx?/,
      include: SRC_DIR,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  },
  output: {
    filename,
    path: DIST_DIR
  }
};