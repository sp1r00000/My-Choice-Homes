const singleView = require('./single-home');

/**
 * route configuration for
 * our-homes page
 * @param server
 */
module.exports = function ourHomes(server) {
  server.route({
    method: 'GET',
    path: '/our-homes',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('ourHomes').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/our-homes/our-homes', result.ourHomes);
      });
    },
  });

  /**
   * setup child routes
   */
  singleView(server);
};
