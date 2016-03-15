/**
 * route configuration for
 * our-homes/pebble-house page
 * @param server
 */
module.exports = function pebbleHouse(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/pebble-house',
    handler: (request, reply) => {
      reply.view('pages/our-homes/pebble-house');
    },
  });
};
