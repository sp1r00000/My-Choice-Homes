/**
 * route configuration for
 * our-homes/ivy-cottage page
 * @param server
 */
module.exports = function ivyCottage(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/ivy-cottage',
    handler: (request, reply) => {
      reply.view('pages/our-homes/ivy-cottage');
    },
  });
};
