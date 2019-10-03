const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const env = require("./src/config");

const config = {
  webpack: config => {
    config.resolve.extensions.push(".js", ".ts", ".tsx");
    config.resolve.modules.push(path.resolve("./src"));

    return config;
  },

  distDir: env.APP_DIST_DIR(false),

  publicRuntimeConfig: {
    ...env,
  },
};

module.exports = withBundleAnalyzer(config);
