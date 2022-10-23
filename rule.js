module.exports = [
  {
    test: /\.(vert|frag|glsl)$/,
    use: [
      {
        loader: "webpack-glsl-loader",
      },
    ],
  },
];
