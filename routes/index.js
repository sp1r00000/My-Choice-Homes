'use strict';

module.exports = function routes(server) {
  const routesConfig = require('../routes/routes-config');

  let date = new Date();

  const newDate = function newDate() {
    date = new Date();
    return date;
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

          if (date > new Date() + 1) newDate();

          reply.view(item.view, data).header('Last-Modified', date.toUTCString());
        });
      },
    });
  });
};
