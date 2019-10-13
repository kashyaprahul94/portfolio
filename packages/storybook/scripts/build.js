#!/usr/bin/env node

const { exec, set } = require("shelljs");

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf build || true");

exec("yarn build-storybook -c src -o build/public");

exec("cp -a package.json build");
exec("cp -a *.lock build || true");

exec("cp -a index.js build");
