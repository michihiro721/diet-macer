const { environment } = require('@rails/webpacker');
const CompressionPlugin = require('compression-webpack-plugin');

environment.plugins.append(
  'CompressionPlugin',
  new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  })
);

// `node` オプションを無効に設定
environment.config.set('node', false);

// Babel ローダーの設定を追加
environment.loaders.append('babel', {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
});

module.exports = environment;
