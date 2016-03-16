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
      reply.view('pages/services/services');
    },
  });

  /**
   * setup child routes
   */
  keyworkSupport(server);
};
