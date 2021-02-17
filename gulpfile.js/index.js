"use strict";

const { series } = require("gulp");

const server = require("gulptask-dev-server").generateTask("./docs/demo", {
  usePhpDevServer: false,
});

const { bundleDemo, watchDemo } = require("gulptask-demo-page").generateTasks({
  srcDir: "./src",
  prefix: "Study",
  body: `<canvas id="webgl-canvas" width="640" height="480"></canvas>`,
  rules: [
    {
      test: /\.(vert|frag|glsl)$/,
      loader: "webpack-glsl-loader",
    },
  ],
});

const watchTasks = (cb) => {
  watchDemo();
  cb();
};
exports.watchTasks = watchTasks;

exports.start_dev = series( watchTasks, server);
exports.build = bundleDemo;
