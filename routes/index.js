'use strict';

module.exports = function routes(server) {
  const useragent = require('useragent');
  const routesConfig = require('../routes/routes-config');

  /**
   * generate new Date if cacheDate
   * is more than 1 day behind
   * @param currentDate
   * @returns Date
   */
  const cacheDate = new Date();
  const date = function date(currentDate) {
    const newDate = new Date();
    const timeDifference = Math.abs(newDate.getTime() - currentDate.getTime());
    const dateDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (dateDifference > 1) return newDate;

    return currentDate;
  };

  routesConfig.forEach(route => {
    server.route({
      method: 'GET',
      path: route.path,
      handler: (req, reply) => {
        const agent = useragent.parse(req.headers['user-agent']);
        const db = req.server.plugins['hapi-mongodb'].db;

        db.collection(route.collection).findOne((error, result) => {
          if (error) throw error;

          let data;

          if (req.params.home) {
            data = result[req.params.home];
          } else {
            data = result[route.subCollection];
          }

          // set links
          if (result.links) data.links = result.links;

          // detect ie
          if (agent.family === 'IE') data.ie = true;

          reply.view(route.view, data).header('Last-Modified', date(cacheDate).toUTCString());
        });
      },
    });
  });
};
