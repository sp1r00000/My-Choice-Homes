/**
 * route configuration for
 * about-us/training/programme page
 * @param server
 */
module.exports = function programme(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training/programme',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        const data = result.programme;
        data.links = result.links;

        reply.view('pages/about-us/training/programme', data);
      });
    },
  });
};
