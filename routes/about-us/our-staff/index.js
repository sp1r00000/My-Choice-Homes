/**
 * route configuration for
 * about-us/our-staff page
 * @param server
 */
module.exports = function ourStaff(server) {
  server.route({
    method: 'GET',
    path: '/about-us/our-staff',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/our-staff');
      reply.view('pages/about-us/our-staff/our-staff', data);
    },
  });
};
