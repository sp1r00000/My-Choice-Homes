/**
 * route configuration for
 * careers/casual-worker page
 * @param server
 */
module.exports = function casualWorker(server) {
  server.route({
    method: 'GET',
    path: '/careers/casual-worker',
    handler: (request, reply) => {
      reply.view('pages/careers/casual-worker');
    },
  });
};
