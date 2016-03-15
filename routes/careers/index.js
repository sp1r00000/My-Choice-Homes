/**
 * route configuration for
 * careers page
 * @param server
 */
module.exports = function careers(server) {
  server.route({
    method: 'GET',
    path: '/careers',
    handler: (request, reply) => {
      reply.view('pages/careers/careers');
    },
  });
};
