import { series, parallel } from "gulp";
import clean from "./config/clean";
import server from "./config/server";
import { scriptsBuild, scriptsWatch } from "./config/scripts";
import { pugBuild, pugWatch } from "./config/pug";
import styles from "./config/styles";

export const build = series(
  clean,
  parallel(
    scriptsBuild,
    pugBuild
    // stylesBuild,
  )
);

export const dev = series(
  build,
  server,
  parallel(
    scriptsWatch,
    pugWatch
    // stylesWatch,
  )
);
