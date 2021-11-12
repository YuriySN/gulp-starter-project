import del from "del";
import config from "./gulp.config";

const clean = () => {
  return del(`./${config.build.root}`);
};

export default clean;
