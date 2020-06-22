"use strict";

const { series, parallel, src, dest, watch } = require("gulp");

const server = require("gulptask-dev-server").get("./docs/demo", {
  usePhpDevServer: false,
});

const { bundleDemo, watchDemo } = require("gulptask-demo-page").get({
  srcDir: "./src/ts",
  prefix: "Study",
  body: `<canvas id="webgl-canvas" width="640" height="480"></canvas>`,
  rules: [
    {
      test: /\.(vert|frag|glsl)$/,
      loader: "webpack-glsl-loader",
    },
  ],
});
exports.bundleDemo = bundleDemo;
// exports.watchDemo = watchDemo;

// const {
//   bundleDevelopment,
//   bundleProduction,
//   watchBundle,
// } = require("gulptask-webpack").get({ configPath: "./webpack.config.js" });

// const copyGlob = "./src/html/*.html";
// const copy = () => {
//   return src(copyGlob).pipe(dest("./docs"));
// };

const copyTexturesGlob = "./src/textures/**/*";
const copyTextures = () => {
  return src(copyTexturesGlob, { base: "./src" }).pipe(dest("./docs"));
};

const watchTasks = (cb) => {
  watchDemo();
  // watch(copyGlob, copy);
  watch(copyTexturesGlob, copyTextures);
  cb();
};
exports.watchTasks = watchTasks;

exports.start_dev = series(watchTasks, server);
exports.build = parallel(bundleDemo, copyTextures);
// exports.build_production = parallel(bundleProduction, copy, copyTextures);
