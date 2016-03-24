/**
 * route configuration for
 * about-us/training/commitment page
 * @param server
 */
module.exports = function programme(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training/commitment',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        const data = result.commitment;
        data.links = result.links;

        reply.view('pages/about-us/training/commitment', data);
      });
    },
  });
};
