import * as path from 'path';
import * as webpack from 'webpack';

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

const commonConfig: webpack.Configuration = {
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          { test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
          { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
      ]
  },
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  output: {
      filename: "[name].js",
      path: __dirname + "/dist"
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new FilterWarningsPlugin({
      exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /pg/, /pg-native/, /pg-query-stream/, /redis/]
    })
  ]
};

const mainConfig = Object.assign({
  entry: { main: path.resolve(__dirname, 'src/main-process/main') },
  target: 'electron-main'
}, commonConfig);

const rendererConfig = Object.assign({
  entry: { renderer: path.resolve(__dirname, 'src/ui/index') },
  target: 'electron-renderer'
}, commonConfig);

export default [mainConfig, rendererConfig];
