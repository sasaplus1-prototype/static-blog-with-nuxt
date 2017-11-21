module.exports = {
  build: {
    vendor: [
      'axios',
    ],
  },
  generate: {
    dir: 'docs',
    routes: [
      '/2017/10/10/01',
      '/2017/10/10/02',
      '/2017/10/10/03',
    ],
  },
  router: {
    middleware: 'simple',
  },  
};
