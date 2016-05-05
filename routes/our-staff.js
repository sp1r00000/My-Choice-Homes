'use strict';

module.exports = function contactUs(server) {
  const Boom = require('boom');

  server.route({
    method: 'GET',
    path: '/about-us/our-staff/{id}',
    config: {
      handler: (request, reply) => {
        const db = request.server.plugins['hapi-mongodb'].db;

        db.collection('aboutUs').findOne((err, result) => {
          if (err) return reply(Boom.internal('Internal MongoDB error', err));

          return reply(result.ourStaff.staff[request.params.id]);
        });
      },
    },
  });
};
