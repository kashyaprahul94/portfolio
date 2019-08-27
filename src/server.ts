import * as http from "http";
import Express from "express";
import next from "next";

import {
  IS_PROD,
  PORT,
  API_BASE_URL,
  APP_NAME,
  APP_VERSION,
  APP_DIST_DIR,
} from "./config";

//

const app = Express();
const serverRouter = Express.Router();
const nextAppRouter = Express.Router();

const server = http.createServer(app);

const nextApp = next({
  dev: !IS_PROD,
  dir: "src",
  conf: {
    distDir: APP_DIST_DIR(IS_PROD),
  },
});

const nextAppRequestHandler = nextApp.getRequestHandler();

//
//

serverRouter
  .route("/debug")
  .get((_: Express.Request, res: Express.Response) => {
    res.json({
      status: "OK",
      name: APP_NAME,
      version: APP_VERSION,
    });
  });

//

nextAppRouter.use("/static", Express.static("src/static"));

nextAppRouter.get("*", (req: Express.Request, res: Express.Response) =>
  nextAppRequestHandler(req, res),
);

//
//
app.use(`${API_BASE_URL}`, serverRouter);
app.use(nextAppRouter);

//
//
//

const start = async () => {
  //

  await nextApp.prepare();

  server.listen(PORT, () => {
    console.info(`> WebServer is listening on http://localhost:${PORT}`);
  });
};

start();
