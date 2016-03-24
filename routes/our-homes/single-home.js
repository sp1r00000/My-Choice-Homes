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
      const data = require(`../../tmp-data/our-homes/${req.params.home}`);
      reply.view('pages/our-homes/single-home', data);
    },
  });
};
