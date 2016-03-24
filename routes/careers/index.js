const casualWorker = require('./casual-worker');
const supportWorker = require('./support-worker');

/**
 * route configuration for
 * careers page
 * @param server
 */
module.exports = function careers(server) {
  server.route({
    method: 'GET',
    path: '/careers',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('careers').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/careers/careers', result.careers);
      });
    },
  });

  /**
   * setup child routes
   */
  casualWorker(server);
  supportWorker(server);
};
