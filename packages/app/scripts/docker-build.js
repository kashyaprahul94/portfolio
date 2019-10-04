#!/usr/bin/env node

"use strict";

const { exec, set } = require("shelljs");

set("-e");
set("-v");

exec("yarn install");

exec("yarn build");

exec("docker build --tag kashyaprahul94/portfolio-app .");
