/**
 * route configuration for
 * about-us/training/programme page
 * @param server
 */
module.exports = function programme(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training/programme',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/training/programme');
      reply.view('pages/about-us/training/programme', data);
    },
  });
};
