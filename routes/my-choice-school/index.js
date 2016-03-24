/**
 * route configuration for
 * my-choice-school page
 * @param server
 */
module.exports = function myChoiceSchool(server) {
  server.route({
    method: 'GET',
    path: '/my-choice-school',
    handler: (req, reply) => {
      const db = req.server.plugins['hapi-mongodb'].db;

      db.collection('myChoiceSchool').findOne((error, result) => {
        if (error) throw error;

        reply.view('pages/my-choice-school/my-choice-school', result.myChoiceSchool);
      });
    },
  });
};
