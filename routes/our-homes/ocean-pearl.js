/**
 * route configuration for
 * our-homes/ocean-pearl page
 * @param server
 */
module.exports = function oceanPearl(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/ocean-pearl',
    handler: (request, reply) => {
      reply.view('pages/our-homes/ocean-pearl');
    },
  });
};
