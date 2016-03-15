/**
 * route configuration for
 * about-us/ofsted-report-quotes page
 * @param server
 */
module.exports = function ofstedReportQuotes(server) {
  server.route({
    method: 'GET',
    path: '/about-us/ofsted-report-quotes',
    handler: (request, reply) => {
      reply.view('pages/about-us/ofsted-report-quotes');
    },
  });
};
