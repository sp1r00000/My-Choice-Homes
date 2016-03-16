const tiles = require('../../tmp-data/tiles');

/**
 * route configuration for
 * home page
 * @param server
 */
module.exports = function home(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('pages/home/home', tiles);
    },
  });
};