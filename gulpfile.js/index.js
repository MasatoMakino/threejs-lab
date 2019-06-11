"use strict";

const { series, parallel, src, dest, watch } = require("gulp");

const server = require("gulptask-dev-server")("./dist");
exports.server = server;

const { bundleDevelopment, watchBundle } = require("gulptask-webpack")(
  "./webpack.config.js"
);
exports.bundleDevelopment = bundleDevelopment;

const copyGlob = "./src/html/*.html";
const copy = () => {
  return src(copyGlob).pipe(dest("./docs"));
};

const copyTexturesGlob = "./src/textures/**/*";
const copyTextures = () => {
  return src(copyTexturesGlob, { base: "./src" }).pipe(dest("./docs"));
};

const watchTasks = cb => {
  watchBundle();
  watch(copyGlob, copy);
  watch(copyTexturesGlob, copyTextures);
  cb();
};
exports.watchTasks = watchTasks;

exports.start_dev = series(watchTasks, server);

exports.build = parallel(bundleDevelopment, copy, copyTextures);
