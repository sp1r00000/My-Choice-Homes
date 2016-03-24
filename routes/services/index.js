const keyworkSupport = require('./keywork-support');

/**
 * route configuration for
 * services page
 * @param server
 */
module.exports = function services(server) {
  server.route({
    method: 'GET',
    path: '/services',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('services').findOne((error, result) => {
        if (error) throw error;

        const data = result.services;
        data.links = result.links;

        reply.view('pages/services/services', data);
      });
    },
  });

  /**
   * setup child routes
   */
  keyworkSupport(server);
};
