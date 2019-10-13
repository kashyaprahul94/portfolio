#!/usr/bin/env node

const { exec, set } = require("shelljs");

const argv = process.argv.slice(2);

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf lib");

exec(`yarn compile ${argv.join(" ")}`);
