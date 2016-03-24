/**
 * route configuration for
 * careers/support-worker page
 * @param server
 */
module.exports = function supportWorker(server) {
  server.route({
    method: 'GET',
    path: '/careers/support-worker',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('careers').findOne((error, result) => {
        if (error) throw error;

        const data = result.supportWorker;
        data.links = result.links;

        reply.view('pages/careers/support-worker', data);
      });
    },
  });
};
