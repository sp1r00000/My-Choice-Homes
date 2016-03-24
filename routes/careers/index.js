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
      const tmpData = require('../../scripts/careers/careers.json');

      db.collection('careers').findOne((error, result) => {
        if (error) throw error;

        const data = result.careers;
        data.links = result.links;
        data.jobs = tmpData;

        reply.view('pages/careers/careers', data);
      });
    },
  });

  /**
   * setup child routes
   */
  casualWorker(server);
  supportWorker(server);
};
