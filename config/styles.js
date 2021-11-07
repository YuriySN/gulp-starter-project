import { src, dest, watch } from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import gcmq from "gulp-group-css-media-queries";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import gulpif from "gulp-if";
import config from "./gulp.config";

const sass = gulpSass(nodeSass);

export const sassBuild = () =>
  src(`${config.src.sass}/index.scss`)
    .pipe(plumber())
    .pipe(gulpif(config.build.dev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gcmq())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpif(config.build.prod, cleanCSS({ level: 2 })))
    .pipe(
      gulpif(
        config.build.prod,
        rename({ basename: "main", suffix: ".min" }),
        rename({ basename: "main" })
      )
    )
    .pipe(gulpif(config.build.dev, sourcemaps.write()))
    .pipe(dest(config.dest.css));

export const sassWatch = () => {
  watch(`${config.src.sass}/**/*.scss`, sassBuild);
};
