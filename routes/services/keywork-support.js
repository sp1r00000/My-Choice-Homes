/**
 * route configuration for
 * services/keywork-support page
 * @param server
 */
module.exports = function services(server) {
  server.route({
    method: 'GET',
    path: '/services/keywork-support',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('services').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/services/keywork-support', result.keyworkSupport);
      });
    },
  });
};
