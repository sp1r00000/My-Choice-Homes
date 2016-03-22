'use strict';

const nodemailer = require('nodemailer');
const config = require('../../config');

const transporter = nodemailer.createTransport(config.transporter);

/**
 * route configuration for
 * contact-us page
 * @param server
 */
module.exports = function contactUs(server) {
  const data = require('../../tmp-data/contact-us');

  server.route({
    method: ['GET', 'POST'],
    path: '/contact-us',
    handler(request, reply) {
      if (request.method === 'post') {
        const email = {
          from: request.payload.email,
          to: config.emailTo,
          subject: 'My Choice Homes',
          html: `
            ${request.payload.message}
            <p>Contact Number: ${request.payload.telephone}</p>
          `,
        };

        transporter.sendMail(email, (error, info) => {
          if (error) throw error;
        });
      }

      reply.view('pages/contact-us/contact-us', data);
    },
  });
};
