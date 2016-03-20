/**
 * route configuration for
 * home page
 * @param server
 */
module.exports = function home(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const data = require('../../tmp-data/home');
      reply.view('pages/home/home', data);
    },
  });
};
