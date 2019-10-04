#!/usr/bin/env node

"use strict";

const { exec, set } = require("shelljs");

set("-e");
set("-v");

exec("cd ../");
exec("rm -rf build");

exec("yarn compile");
