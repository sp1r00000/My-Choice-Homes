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
      const data = require('../../tmp-data/referrals');
      reply.view('pages/referrals/referrals', data);
    },
  });
};
