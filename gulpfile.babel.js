import { series, parallel } from "gulp";
import clean from "./config/clean";
import server from "./config/server";
import { scriptsBuild, scriptsWatch } from "./config/scripts";
import { pugBuild, pugWatch } from "./config/pug";
import { sassBuild, sassWatch } from "./config/styles";
import { fontsBuild, fontsWatch } from './config/fonts';
import { imagesBuild, imagesWatch } from './config/images';

export const build = series(
  clean,
  parallel(
    scriptsBuild,
    pugBuild,
    sassBuild,
    fontsBuild,
    imagesBuild
  )
);

export const dev = series(
  build,
  server,
  parallel(
    scriptsWatch,
    pugWatch,
    sassWatch,
    fontsWatch,
    imagesWatch
  )
);
