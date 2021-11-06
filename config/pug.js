import { src, dest, watch } from "gulp";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import plumber from "gulp-plumber";
import { setup as emittySetup } from "@zoxon/emitty";
import config from "./gulp.config";

const emittyPug = emittySetup(config.src.pug, "pug", {
  makeVinylFile: true,
});

global.isPugWatch = false;
global.emittyChangedFile = {
  path: "",
  stats: null,
};

export const pugBuild = () =>
  src(`${config.src.pug}/*.pug`)
    .pipe(plumber())
    .pipe(
      gulpif(
        global.isPugWatch,
        emittyPug.stream(
          global.emittyChangedFile.path,
          global.emittyChangedFile.stats
        )
      )
    )
    .pipe(gulpif(config.build.dev, pug({ pretty: true }), pug()))
    .pipe(dest(config.dest.html));

export const pugWatch = () => {
  global.isPugWatch = true;

  watch(`${config.src.pug}/**/*.pug`, pugBuild).on(
    "all",
    (event, filepath, stats) => {
      global.emittyChangedFile = {
        path: filepath,
        stats,
      };
    }
  );
};
