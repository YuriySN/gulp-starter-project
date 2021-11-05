import { src, dest } from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(nodeSass);

const styles = () => {
  return src("./src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(dest("./build/css"));
  // .pipe(browserSync.stream());
};

export default styles;
