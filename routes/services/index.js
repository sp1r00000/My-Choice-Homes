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
    handler: (request, reply) => {
      const data = require('../../tmp-data/services');
      reply.view('pages/services/services', data);
    },
  });

  /**
   * setup child routes
   */
  keyworkSupport(server);
};
