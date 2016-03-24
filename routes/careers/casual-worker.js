/**
 * route configuration for
 * careers/casual-worker page
 * @param server
 */
module.exports = function casualWorker(server) {
  server.route({
    method: 'GET',
    path: '/careers/casual-worker',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('careers').findOne((error, result) => {
        if (error) throw error;

        const data = result.casualWorker;
        data.links = result.links;

        reply.view('pages/careers/casual-worker', data);
      });
    },
  });
};
