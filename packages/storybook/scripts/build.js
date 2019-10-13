#!/usr/bin/env node

const { exec, set } = require("shelljs");

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf build");

exec("next build src");

exec("yarn compile");

exec("cp -a package.json build");
exec("cp -a *.lock build");

exec("cp -a next.config.js build");
exec("cp -a src/static/. build/src/static");
