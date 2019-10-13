const { env } = require("process");
const { exec, set } = require("shelljs");

const PORT = env.PORT || 7000;

set("-e");
set("-v");

exec("cd ../");

exec(`yarn start-storybook -p ${PORT} -c src`);
