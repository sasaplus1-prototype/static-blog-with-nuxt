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
  modules: [
    ['wowwow', {
      opt1: 1,
      opt2: 2,
      opt3: 3,
    }]
  ],
  /*
  serverMiddleware: [
    { path: '/api', handler: '~api.js', },
  ],
  */
};
