import { Container } from "inversify";
import { makeLoggerMiddleware } from "inversify-logger-middleware";

import { getConfig, RunMode } from "../config";

export function applyMiddleware(container: Container) {
  const isDevelopment = getConfig().runMode === RunMode.development;

  if (isDevelopment) {
    const logger = makeLoggerMiddleware();

    container.applyMiddleware(logger);
  }
}
