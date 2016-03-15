/**
 * route configuration for
 * contact-us page
 * @param server
 */
module.exports = function contactUs(server) {
  server.route({
    method: 'GET',
    path: '/contact-us',
    handler: (request, reply) => {
      reply.view('pages/contact-us/contact-us');
    },
  });
};
