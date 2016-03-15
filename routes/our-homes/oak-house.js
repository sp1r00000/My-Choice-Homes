/**
 * route configuration for
 * our-homes/oak-house page
 * @param server
 */
module.exports = function oakHouse(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/oak-house',
    handler: (request, reply) => {
      reply.view('pages/our-homes/oak-house');
    },
  });
};
