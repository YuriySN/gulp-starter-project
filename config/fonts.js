import { src, dest, watch } from "gulp";
import config from "./gulp.config";

export const fontsBuild = (done) => { 
  src(`${config.src.fonts}/**/*`).pipe(dest(config.dest.fonts));
  done();
}

export const fontsWatch = () => watch(`${config.src.fonts}/**/*`, fontsBuild);
