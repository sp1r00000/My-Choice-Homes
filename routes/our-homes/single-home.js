/**
 * route configuration for
 * our-homes/{home} page
 * @param server
 */
module.exports = function ivyCottage(server) {
  server.route({
    method: 'GET',
    path: '/our-homes/{home}',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('ourHomes').findOne((error, result) => {
        if (error) throw error;

        const data = result[req.params.home];
        data.links = result.links;

        reply.view('pages/our-homes/single-home', data);
      });
    },
  });
};
