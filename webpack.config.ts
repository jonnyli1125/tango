import * as path from 'path';
import * as webpack from 'webpack';

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
  }
};

const main = Object.assign({
  entry: { main: path.resolve(__dirname, 'src/main-process/main') },
  target: 'electron-main'
}, commonConfig);

const renderer = Object.assign({
  entry: { renderer: path.resolve(__dirname, 'src/ui/index') },
  target: 'electron-renderer'
}, commonConfig);

export default [main, renderer];
