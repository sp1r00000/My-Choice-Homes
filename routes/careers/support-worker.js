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
      reply.view('pages/careers/support-worker');
    },
  });
};
