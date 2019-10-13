const { env } = require("process");
const express = require("express");

const expressServer = express();

const PORT = env.PORT || 7000;
const PUBLIC_DIR = env.PUBLIC_DIR || "build/public";

expressServer.use(express.static(PUBLIC_DIR));

expressServer.listen(PORT, () => {
  console.info(`> WebServer is listening on http://localhost:${PORT}`);
});
