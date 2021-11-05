const source = "src";
const output = "build";

// export const isDev = process.env.NODE_ENV === "development";
// export const isProd = !isDev;

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev

const config = {
  src: {
    root: source,
    js: `${source}/js`,
    pug: `${source}/pug`,
    sass: `${source}/scss`,
    fonts: `${source}/assets/fonts`,
    images: `${source}/assets/images`,
  },

  dest: {
    root: output,
    js: `${output}/js`,
    html: `${output}/layout`,
    css: `${output}/css`,
    fonts: `${output}/fonts`,
    images: `${output}/images`,
  },

  build: {
    dev: isDev,
    prod: isProd,
  },
};

export default config;
