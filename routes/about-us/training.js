const programme = require('./programme');
const commitment = require('./commitment');

/**
 * route configuration for
 * about-us/training page
 * @param server
 */
module.exports = function training(server) {
  server.route({
    method: 'GET',
    path: '/about-us/training',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/training');
      reply.view('pages/about-us/training', data);
    },
  });

  programme(server);
  commitment(server);
};
