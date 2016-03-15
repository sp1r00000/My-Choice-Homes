/**
 * route configuration for
 * our-homes/maple-house page
 * @param server
 */
module.exports = function mapleHouse(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/maple-house',
    handler: (request, reply) => {
      reply.view('pages/our-homes/maple-house');
    },
  });
};
