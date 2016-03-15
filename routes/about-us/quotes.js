/**
 * route configuration for
 * about-us/quotes page
 * @param server
 */
module.exports = function quotes(server) {
  server.route({
    method: 'GET',
    path: '/about-us/quotes',
    handler: (request, reply) => {
      reply.view('pages/about-us/quotes');
    },
  });
};
