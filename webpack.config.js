const PreloadWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new PreloadWebpackPlugin({
    rel: 'preload',
    include: 'allAssets',
    fileBlacklist: [/\.(js|woff2|png|eot|jpe?g|css|svg)/],
  }),
  ],
};
