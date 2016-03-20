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
    handler: (request, reply) => {
      const data = require('../../tmp-data/careers');
      reply.view('pages/careers/careers', data);
    },
  });

  /**
   * setup child routes
   */
  casualWorker(server);
  supportWorker(server);
};
