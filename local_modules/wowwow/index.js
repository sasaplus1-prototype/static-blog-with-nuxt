const util = require('util');

function wowwowModule(moduleOptions) {
  this.addServerMiddleware(function(req, res, next) {
    if (!/^XMLHttpRequest$/i.test(req.headers['x-requested-with'])) {
      res.writeHead(404);
      res.end('Not Found');
    } else if (/^\/api/.test(req.url)) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      });
      res.end(JSON.stringify({
        url: req.url,
        moduleOptions,
      }));
    } else {
      next();
    }
  });
}

module.exports = wowwowModule;
