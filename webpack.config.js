const mode = process.env.MODE || 'development';
const filename = mode === 'development' ? 'bundle.js' : 'prod.js';

module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  mode,
  module: {
    rules: [{
      test: /\.jsx?/,
      include: `${__dirname}/client/src`,
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
    include: `${__dirname}/client/src`
  }
};