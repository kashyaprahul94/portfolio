import * as http from "http";
import Express from "express";
import next from "next";

import { IS_PROD, PORT, APP_URL, API_BASE_URL, APP_DIST_DIR } from "./config";

import service from "./service";

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
  .route("/health")
  .get((_: Express.Request, res: Express.Response) => {
    service
      .getSystemHealth()
      .then((data: any) => res.send(data))
      .catch((error: Error) => res.send(error));
  });

serverRouter
  .route("/resume/generate")
  .get((_: Express.Request, res: Express.Response) => {
    service
      .generatePdfFromURL(`${APP_URL}/resume?print=true`)
      .then(({ pdfStream }) => {
        res.setHeader("Content-Type", "application/pdf");
        pdfStream.pipe(res);
      })
      .catch((error: Error) => res.send(error));
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
    console.info(`> WebServer is listening on ${APP_URL}`);
  });
};

start();
