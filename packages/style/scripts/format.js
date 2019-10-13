#!/usr/bin/env node

const { exec, set } = require("shelljs");

const argv = process.argv.slice(2);

set("-e");
set("-v");

exec("cd ../");
exec(
  `prettier $(find . -name '*.tsx' -o  -name '*.ts' -not -path '*/node_modules/*' -not -path '*/lib/*') ${argv.join(
    " ",
  )}`,
);
