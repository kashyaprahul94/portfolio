#!/usr/bin/env node

"use strict";

const { exec, set } = require("shelljs");

const argv = process.argv.slice(2);

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf lib");

exec("mkdir lib");

exec("cp -a package.json lib");

exec(`yarn compile ${argv.join(" ")}`);
