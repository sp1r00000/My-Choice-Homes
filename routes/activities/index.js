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
      const data = require('../../tmp-data/activities');
      reply.view('pages/activities/activities', data);
    },
  });
};
