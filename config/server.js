import browserSync from "browser-sync";
import config from "./gulp.config";

const server = (done) => {
  browserSync.create().init({
    server: {
      baseDir: [config.dest.html, config.dest.root],
    },
    files: [
      `${config.dest.js}/*.js`,
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
    ],
    open: false,
    notify: false,
  });

  done();
};

export default server;
