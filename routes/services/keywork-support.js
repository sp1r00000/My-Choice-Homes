/**
 * route configuration for
 * services/keywork-support page
 * @param server
 */
module.exports = function services(server) {
  server.route({
    method: 'GET',
    path: '/services/keywork-support',
    handler: (request, reply) => {
      reply.view('pages/services/keywork-support');
    },
  });
};
