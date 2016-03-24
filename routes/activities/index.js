/**
 * route configuration for
 * activities page
 * @param server
 */
module.exports = function activities(server) {
  server.route({
    method: 'GET',
    path: '/activities',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('activities').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/activities/activities', result.activities);
      });
    },
  });
};
