/**
 * route configuration for
 * home page
 * @param server
 */
module.exports = function home(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('home').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/home/home', result.home);
      });
    },
  });
};
