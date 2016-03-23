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
      const db = request.server.plugins['hapi-mongodb'].db;

      db.collection('home').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/home/home', result);
      });
    },
  });
};
