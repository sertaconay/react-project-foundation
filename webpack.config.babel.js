const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');


module.exports = (env, argv) => {
  console.log({ env, argv });
  const { mode } = argv;

  const resolvePath = src => path.join(__dirname, src);

  const paths = {
    src: resolvePath('src'),
    nodeModules: resolvePath('node_modules'),
    public: resolvePath('public'),
  };

  return {
    entry: {
      app: ['@babel/polyfill', paths.src],
    },
    output: {
      filename: mode === 'production' ? '[name].[hash].js' : '[name].js',
      path: resolvePath('public'),
      publicPath: '/',
    },
    target: 'web',
    devtool: mode === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
    resolve: {
      modules: [paths.nodeModules, paths.src],
      extensions: ['.js', '.json', '.ts', '.tsx', '.jsx', '.svg', '.jpg', '.png'],
    },
    devServer: {
      stats: 'errors-only',
      historyApiFallback: true,
      disableHostCheck: true,
      port: 5050,
      overlay: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new DotEnv({
        path: `./env.${mode === 'production'} ? 'prod' : 'dev'`,
        safe: true,
        systemvars: true,
      }),
      new webpack.EnvironmentPlugin({
        BABEL_ENV: mode,
      }),
      new HtmlWebpackPlugin({
        title: 'React Project Foundation',
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
          { content: 'ie=edge', 'http-equiv': 'x-ua-compatible' },
        ],
        prefetch: ['**/*.*'],
        preload: ['**/*.*'],
        template: HtmlWebpackTemplate,
        appMountId: 'app',
        inject: false,
        minify: {
          removeComments: false,
          collapseWhitespace: false,
        },
      }),
      new MiniCssExtractPlugin({
        filename: mode === 'production' ? '[name].[hash].css' : '[name].css',
        chunkFilename: mode === 'production' ? '[id].[hash].css' : '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader?sourceMap',
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader?sourceMap',
            {
              loader: 'less-loader?sourceMap',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.(js|ts)x?$/,
          include: paths.src,
          use: ['eslint-loader', 'stylelint-custom-processor-loader'],
        },
        {
          test: /\.(ts|js)x?$/,
          include: paths.src,
          loader: 'babel-loader',
        },
      ],
    },
  };
};
