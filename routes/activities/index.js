const data = require('../../tmp-data/activities');

/**
 * route configuration for
 * activities page
 * @param server
 */
module.exports = function activities(server) {
  server.route({
    method: 'GET',
    path: '/activities',
    handler: (request, reply) => {
      reply.view('pages/activities/activities', data);
    },
  });
};
