const singleView = require('./single-view');

/**
 * route configuration for
 * our-homes page
 * @param server
 */
module.exports = function ourHomes(server) {
  server.route({
    method: 'GET',
    path: '/our-homes',
    handler: (request, reply) => {
      const data = require('../../tmp-data/our-homes');
      reply.view('pages/our-homes/our-homes', data);
    },
  });

  /**
   * setup child routes
   */
  singleView(server);
};
