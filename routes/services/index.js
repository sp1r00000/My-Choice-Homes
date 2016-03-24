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

        reply.view('pages/services/services', result.services);
      });
    },
  });

  /**
   * setup child routes
   */
  keyworkSupport(server);
};
