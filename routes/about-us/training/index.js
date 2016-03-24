const programme = require('./programme');
const commitment = require('./commitment');

/**
 * route configuration for
 * about-us/training page
 * @param server
 */
module.exports = function training(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/about-us/training/training', result.training);
      });
    },
  });

  programme(server);
  commitment(server);
};
