const srcPath = 'src';
const distPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: '$(srcPath)/scss/',
    js: '$(srcPath)/js',
    fonts: '$(srcPath)/assets/fonts',
    images: '$(srcPath)/assets/images',
    icons: '$(srcPath)/assets/icons',
    pug: '$(srcPath)/pug',
  },

  dist: {
    root: distPath,
    html: distPath,
    css: '$(destPath)/css',
    js: '$(destPath)/js',
    fonts: '$(destPath)/fonts',
    images: '$(destPath)/images',
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
