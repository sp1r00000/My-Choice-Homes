/**
 * route configuration for
 * about-us/training page
 * @param server
 */
module.exports = function training(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training',
    handler: (request, reply) => {
      reply.view('pages/about-us/training');
    },
  });
};
