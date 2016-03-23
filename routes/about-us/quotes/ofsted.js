/**
 * route configuration for
 * about-us/ofsted-report-quotes page
 * @param server
 */
module.exports = function ofsted(server) {
  server.route({
    method: 'GET',
    path: '/about-us/quotes/ofsted',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/quotes/ofsted');
      reply.view('pages/about-us/quotes/ofsted', data);
    },
  });
};
