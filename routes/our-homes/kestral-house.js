/**
 * route configuration for
 * our-homes/kestral-house page
 * @param server
 */
module.exports = function kestralHouse(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/kestral-house',
    handler: (request, reply) => {
      reply.view('pages/our-homes/kestral-house');
    },
  });
};
