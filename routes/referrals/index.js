const data = require('../../tmp-data/referrals');

/**
 * route configuration for
 * referrals page
 * @param server
 */
module.exports = function referrals(server) {
  server.route({
    method: 'GET',
    path: '/referrals',
    handler: (request, reply) => {
      reply.view('pages/referrals/referrals', data);
    },
  });
};
