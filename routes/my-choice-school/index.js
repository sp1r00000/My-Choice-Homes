/**
 * route configuration for
 * my-choice-school page
 * @param server
 */
module.exports = function myChoiceSchool(server) {
  server.route({
    method: 'GET',
    path: '/my-choice-school',
    handler: (request, reply) => {
      const data = require('../../tmp-data/my-choice-school');
      reply.view('pages/my-choice-school/my-choice-school', data);
    },
  });
};
