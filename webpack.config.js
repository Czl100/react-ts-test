const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  // 开发模式不压缩代码
  mode: 'development',
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        // use: ['css-loader', 'sass-loader'],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      title: '哈哈哈哈哈'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 49123,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  // 报错
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
};

module.exports = config;
