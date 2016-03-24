/**
 * route configuration for
 * about-us/ofsted-report-quotes page
 * @param server
 */
module.exports = function ofsted(server) {
  server.route({
    method: 'GET',
    path: '/about-us/quotes/ofsted',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/about-us/quotes/ofsted', result.ofstedQuotes);
      });
    },
  });
};
