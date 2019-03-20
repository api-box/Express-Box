import fs from "fs";

interface IConfig {
  runMode: RunMode;
  port: number;
}

export enum RunMode {
  "production",
  "development"
}

const defaultConfig: IConfig = {
  runMode: RunMode.development,
  port: 8080
};

export function getConfig() {
  const config: IConfig = JSON.parse(
    fs.readFileSync("./config.json").toString()
  );

  return config || defaultConfig;
}
