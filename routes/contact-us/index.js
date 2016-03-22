'use strict';

const config = require('../../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');

const transporter = nodemailer.createTransport(config.transporter);

/**
 * route configuration for
 * contact-us page
 * @param server
 */
module.exports = function contactUs(server) {
  const data = require('../../tmp-data/contact-us');

  server.route({
    method: 'GET',
    path: '/contact-us',
    handler(request, reply) {
      reply.view('pages/contact-us/contact-us', data);
    },
  });

  server.route({
    method: 'POST',
    path: '/contact-us',
    config: {
      validate: {
        payload: {
          name: Joi.string().min(3).required(),
          email: Joi.string().email().required(),
          telephone: Joi.string().min(0),
          message: Joi.string().min(0),
        },
      },
    },
    handler(request, reply) {
      const email = {
        from: request.payload.email,
        to: config.emailTo,
        subject: 'My Choice Homes',
        html: `
            ${request.payload.message}
            <p>Contact Name: ${request.payload.name}</p>
            <p>Contact Number: ${request.payload.telephone}</p>
          `,
      };

      transporter.sendMail(email, (error, info) => {
        if (error) console.log(error);
      });

      reply.view('pages/contact-us/contact-us', data);
    },
  });
};
