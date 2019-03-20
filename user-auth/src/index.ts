import "reflect-metadata";

import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import { getConfig } from "./config";
import { applyMiddleware } from "./init/middleware";

import bodyParser from "body-parser";
import helmet from "helmet";

import TYPES from "./injectable/list";

const container = new Container();
const config = getConfig();
applyMiddleware(container);

const server = new InversifyExpressServer(container);
server.setConfig(app => {
  app.use(helmet());
  app.use(bodyParser.json());
});

const app = server.build();
app.listen(config.port, () => {
  console.info("[INFO] Server started!");
});
