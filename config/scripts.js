import { dest, watch } from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import sourcemaps from "gulp-sourcemaps";
import gulpif from "gulp-if";
import uglify from "gulp-uglify";
import config from "./gulp.config";
// import config, { isDev, isProd } from "./gulp.config";

export const scriptsBuild = () =>
  browserify(`${config.src.js}/index.js`, { debug: true })
    .transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()
    .on("error", function browserifyError(error) {
      console.log(error.stack);
      this.emit("end");
    })
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(gulpif(config.build.dev, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.build.prod, uglify()))
    .pipe(gulpif(config.build.dev, sourcemaps.write()))
    .pipe(dest(config.dest.js));

export const scriptsWatch = () =>
  watch(`${config.src.js}/**/*.js`, scriptsBuild);
