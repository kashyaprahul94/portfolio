const path = require("path");

const env = require("./src/config");

const config = {
  webpack: config => {
    config.resolve.modules.push(path.resolve("./src"));

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },

  distDir: env.APP_DIST_DIR(false),

  publicRuntimeConfig: {
    ...env,
  },
};

module.exports = config;
