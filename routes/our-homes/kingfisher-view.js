/**
 * route configuration for
 * our-homes/kingfisher-view page
 * @param server
 */
module.exports = function kingFisherView(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/kingfisher-view',
    handler: (request, reply) => {
      reply.view('pages/our-homes/kingfisher-view');
    },
  });
};
