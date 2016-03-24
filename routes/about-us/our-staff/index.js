/**
 * route configuration for
 * about-us/our-staff page
 * @param server
 */
module.exports = function ourStaff(server) {
  server.route({
    method: 'GET',
    path: '/about-us/our-staff',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('aboutUs').findOne((error, result) => {
        if (error) throw error;

        const data = result.ourStaff;
        data.links = result.links;

        reply.view('pages/about-us/our-staff/our-staff', data);
      });
    },
  });
};
