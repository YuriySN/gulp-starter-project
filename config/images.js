import { src, dest, watch, series } from "gulp";
import changed from "gulp-changed";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import rename from "gulp-rename";
import gulpif from "gulp-if";
import config from "./gulp.config";

const copyImages = () =>
  src(`${config.src.images}/**/*`)
    .pipe(changed(config.dest.images))
    .pipe(
      gulpif(
        config.build.prod,
        imagemin([
          imagemin.mozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.8, 0.9] }),
          imagemin.svgo(),
        ])
      )
    )
    .pipe(dest(config.dest.images));

const convertImagesToWebp = () =>
  src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(changed(config.dest.images, { extension: ".webp" }))
    .pipe(imagemin([imageminWebp({ quality: 80 })]))
    .pipe(
      rename({
        extname: ".webp",
      })
    )
    .pipe(dest(config.dest.images));

export const imagesBuild = series(copyImages, convertImagesToWebp);

export const imagesWatch = () =>
  watch(`${config.src.images}/**/*`, imagesBuild);
