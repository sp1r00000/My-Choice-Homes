'use strict';

module.exports = function routes(server) {
  const routesConfig = require('../routes/routes-config');

  const cacheDate = new Date();

  /**
   * generate new Date if cacheDate
   * is more than 1 day behind
   * @param currentDate
   * @returns Date
   */
  const date = function date(currentDate) {
    const newDate = new Date();
    const timeDifference = Math.abs(newDate.getTime() - currentDate.getTime());
    const dateDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (dateDifference > 1) return newDate;

    return currentDate;
  };

  routesConfig.forEach(item => {
    server.route({
      method: 'GET',
      path: item.path,
      handler: (req, reply) => {
        const db = req.server.plugins['hapi-mongodb'].db;

        db.collection(item.collection).findOne((error, result) => {
          if (error) throw error;

          let data;

          if (req.params.home) {
            data = result[req.params.home];
          } else {
            data = result[item.subCollection];
          }

          if (result.links) data.links = result.links;

          reply.view(item.view, data).header('Last-Modified', date(cacheDate).toUTCString());
        });
      },
    });
  });
};
