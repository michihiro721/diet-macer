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

// 修正: 不要なプロパティを削除
environment.config.merge({
  node: {
    __dirname: true,
    __filename: true,
    global: true,
  }
});

module.exports = environment;
