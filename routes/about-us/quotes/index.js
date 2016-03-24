const ofsted = require('./ofsted');

/**
 * route configuration for
 * about-us/quotes page
 * @param server
 */
module.exports = function quotes(server) {
  server.route({
    method: 'GET',
    path: '/about-us/quotes',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        const data = result.quotes;
        data.links = result.links;

        reply.view('pages/about-us/quotes/quotes', data);
      });
    },
  });

  ofsted(server);
};
