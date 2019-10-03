const { spawn } = require("child_process");

const storybook = spawn("yarn", [
  "start-storybook",
  "-p",
  "7000",
  "-c",
  ".storybook",
]);

storybook.stdout.pipe(process.stdout);
storybook.stderr.pipe(process.stderr);
