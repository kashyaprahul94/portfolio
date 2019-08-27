const { webpack } = require("../next.config");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")]
    }
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return {
    ...config,
    ...webpack(config)
  };
};
