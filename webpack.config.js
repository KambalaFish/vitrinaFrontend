require('dotenv').config();
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isAnalyze = process.env.NODE_ENV === 'analyze';
const isProd = !isDev || !isAnalyze;
const port = process.env.PORT;
const analyzerPort = 3003;

const filename = (extension) =>
  isDev ? `[name].${extension}` : `[name].[contenthash].${extension}`;
const chunkFilename = (extension) =>
  isDev ? `[id].[name].${extension}` : `[id].[name].[contenthash].${extension}`;

const getPlugins = () => {
  const baseSetOfPlugins = [
    new HTMLWebpackPlugin({
      template: './index.html',
      inject: 'body',
      scriptLoading: 'defer',
      minify: isProd,
    }),
    new ESLintPlugin({ useEslintrc: true, extensions: ['js', 'ts', 'jsx', 'tsx'] }),
    new StylelintPlugin({
      configFile: path.join(__dirname, '.stylelintrc.js'),
      context: path.join(__dirname, 'src'),
      extensions: ['css', 'scss', 'sass'],
      fix: true,
    }),
  ];
  if (isProd) {
    baseSetOfPlugins.push(
      new MiniCssExtractPlugin({
        filename: filename('css'),
        chunkFilename: filename('css'),
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        compressionOptions: {
          level: 9,
        },
      })
    );
  }
  if (isAnalyze) {
    baseSetOfPlugins.push(
      new BundleAnalyzerPlugin({
        defaultSizes: 'stat',
        analyzerPort,
        analyzerHost: 'localhost',
      })
    );
  }
  return baseSetOfPlugins;
};

const babelLoader = (...presets) => {
  const presetEnv = [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: {
        version: '3.28.0',
        proposals: true,
      },
      /*we have to provide es modules for webpack for tree shaking purposes*/
      modules: false,
    },
  ];
  return {
    loader: 'babel-loader',
    options: {
      presets: presets.length > 0 ? [presetEnv, ...presets] : [presetEnv],
      browserslistConfigFile: true,
    },
  };
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            stage: 1,
          },
        ],
      ],
    },
  },
};

const cssLoaders = (...loaders) => {
  const cssLoaders = [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: isDev ? '[local]___[path][name]' : '[hash:base64]',
          namedExport: true,
          exportGlobals: true,
        },
        importLoaders: loaders.length,
      },
    },
  ];

  if (loaders.length > 0) {
    cssLoaders.push(...loaders);
  }

  return cssLoaders;
};

module.exports = {
  mode: isDev ? 'development' : 'production',
  target: 'browserslist',
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    filename: filename('js'),
    chunkFilename: chunkFilename('js'),
    path: path.join(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    mainFiles: ['index'],
    alias: {
      '@assets': path.join(__dirname, 'src', 'assets'),
      '@styles': path.join(__dirname, 'src', 'styles'),
      '@components': path.join(__dirname, 'src', 'components'),
      '@pages': path.join(__dirname, 'src', 'pages'),
      '@utils': path.join(__dirname, 'src', 'utils'),
    },
  },
  devServer: {
    port,
    hot: isDev,
    open: isDev,
    compress: isDev,
    historyApiFallback: isDev,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: getPlugins(),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    chunkIds: isDev ? 'named' : 'deterministic',
    emitOnErrors: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    minimize: isProd,
    providedExports: isProd,
    sideEffects: isProd,
    usedExports: isProd,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoader(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: babelLoader('@babel/preset-react'),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [babelLoader(), 'ts-loader'],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [babelLoader('@babel/preset-react'), 'ts-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssLoaders(postCSSLoader),
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: cssLoaders(postCSSLoader, 'sass-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        /*https://github.com/boopathi/react-svg-loader/tree/master/packages/react-svg-loader*/
        test: /\.svg$/,
        use: [
          babelLoader('@babel/preset-react'),
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
};
