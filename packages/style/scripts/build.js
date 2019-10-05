#!/usr/bin/env node

"use strict";

const { exec, set } = require("shelljs");

const argv = process.argv.slice(2);

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf build");

exec("mkdir build");

exec("cp -a package.json build");

exec(`yarn compile ${argv.join(" ")}`);
