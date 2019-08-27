exports.NODE_ENV = String(process.env.NODE_ENV).toLowerCase();
exports.IS_PROD = exports.NODE_ENV === "production";

exports.PORT = process.env.PORT;

exports.APP_NAME = process.env.npm_package_name;
exports.APP_VERSION = process.env.npm_package_version;

exports.APP_DIST_DIR = (isProd = false) =>
  isProd ? "../next" : "../build/next";

exports.API_BASE_URL = process.env.API_BASE_URL;
