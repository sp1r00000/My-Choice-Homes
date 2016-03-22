/**
 * route configuration for
 * about-us/training/commitment page
 * @param server
 */
module.exports = function programme(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training/commitment',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/commitment');
      reply.view('pages/about-us/training/commitment', data);
    },
  });
};
