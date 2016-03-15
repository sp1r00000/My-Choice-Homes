/**
 * route configuration for about us page
 * @param server
 */
module.exports = function aboutUs(server) {
  server.route({
    method: 'GET',
    path: '/about-us',
    handler: (request, reply) => {
      reply.view('partials/about-us');
    },
  });
};
