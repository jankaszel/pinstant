const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const config = {
  entry: ['babel-polyfill', `${__dirname}/app/index.js`],

  output: {
    path: `${__dirname}/public`,
    filename: debug ? 'app.js' : 'app.[hash].js',
  },

  devtool: 'source-map',
  performance: {
    hints: debug ? false : 'warning',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.otf$/,
        use: 'file-loader',
      },
    ],
  },

  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3000,
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: !debug,
      debug,
    }),

    new HtmlWebpackPlugin({
      inject: 'body',
      template: `${__dirname}/index.html`,
    }),
  ],
};

if (!debug) {
  const prodPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ];

  prodPlugins.forEach(plugin => config.plugins.push(plugin));
}

module.exports = config;
