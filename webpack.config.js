const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },  // ако имаш снимки
      ],
       }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
      {
  test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  type: 'asset/resource',
}
    ],
  },
};
