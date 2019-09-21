const { webpack } = require("../next.config");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return {
    ...config,
    ...webpack(config),
  };
};
