'use strict';

module.exports = function routes(server) {
  const useragent = require('useragent');
  const routesConfig = require('../routes/routes-config');
  const Boom = require('boom');

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

          if (result.links) data.links = result.links;

          if (agent.family === 'IE') data.ie = true;

          reply.view(route.view, data);
        });
      },
    });
  });
};
