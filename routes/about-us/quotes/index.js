const ofsted = require('./ofsted');

/**
 * route configuration for
 * about-us/quotes page
 * @param server
 */
module.exports = function quotes(server) {
  server.route({
    method: 'GET',
    path: '/about-us/quotes',
    handler: (request, reply) => {
      const data = require('../../../tmp-data/about-us/quotes');
      reply.view('pages/about-us/quotes/quotes', data);
    },
  });

  ofsted(server);
};
