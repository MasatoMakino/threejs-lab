"use strict";

const { series, parallel, src, dest, watch } = require("gulp");

const server = require("gulptask-dev-server")("./docs");
exports.server = server;

const {
  bundleDevelopment,
  bundleProduction,
  watchBundle
} = require("gulptask-webpack")("./webpack.config.js");

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
exports.build_production = parallel(bundleProduction, copy, copyTextures);
