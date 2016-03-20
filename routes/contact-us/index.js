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
      const data = require('../../tmp-data/contact-us');
      reply.view('pages/contact-us/contact-us', data);
    },
  });
};
