/**
 * route configuration for
 * referrals page
 * @param server
 */
module.exports = function referrals(server) {
  server.route({
    method: 'GET',
    path: '/referrals',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('referrals').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/referrals/referrals', result.referrals);
      });
    },
  });
};
