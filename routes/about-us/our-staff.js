const data = require('../../tmp-data/our-staff');

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
      reply.view('pages/about-us/our-staff', data);
    },
  });
};
