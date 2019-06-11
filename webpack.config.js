"use strict";

const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

const srcDir = "./src/ts/";

const entries = {};
glob
  .sync("**/Study*.ts", {
    cwd: srcDir
  })
  .map(key => {
    const baseName = key.replace(/\.ts$/, "");
    entries[baseName] = path.resolve(srcDir, key);
  });

module.exports = {
  entry: entries,
  output: {
    path: `${__dirname}/docs/js`,
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(vert|frag|glsl)$/,
        use: [
          {
            loader: "webpack-glsl-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".webpack.js", ".web.js", ".js"],
    alias: {
      ts: path.resolve(__dirname, "./src/ts"),
      local_module: path.resolve(__dirname, "./src/local_module")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: /node_modules/,
          enforce: true
        }
      }
    }
  }
};
