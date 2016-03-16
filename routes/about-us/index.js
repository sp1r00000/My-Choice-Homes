const ofstedReportQuotes = require('./ofsted-report-quotes');
const ourStaff = require('./our-staff');
const quotes = require('./quotes');
const training = require('./training');

/**
 * route configuration for
 * about us page
 * @param server
 */
module.exports = function aboutUs(server) {
  server.route({
    method: 'GET',
    path: '/about-us',
    handler: (request, reply) => {
      reply.view('pages/about-us/about-us');
    },
  });

  /**
   * setup child routes
   */
  ofstedReportQuotes(server);
  ourStaff(server);
  quotes(server);
  training(server);
};
