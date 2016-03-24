const ourStaff = require('./our-staff');
const quotes = require('./quotes');
const training = require('./training');

/**
 * route configuration for
 * about us page
 * @param server
 */
module.exports = function aboutUs(server) {
  server.route({
    method: 'GET',
    path: '/about-us',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/about-us/about-us', result.aboutUs);
      });
    },
  });

  /**
   * setup child routes
   */
  ourStaff(server);
  quotes(server);
  training(server);
};
