'use strict';

const config = require('../../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');
const req = require('request');

const transporter = nodemailer.createTransport(config.transporter);

const sendMail = function sendMail(request) {
  const emailConfig = {};
  emailConfig.from = request.payload.email;
  emailConfig.to = config.emailTo;
  emailConfig.subject = 'My Choice Homes';
  emailConfig.text = request.payload.message;

  transporter.sendMail(emailConfig, error => {
    if (error) console.log('send mail error', error);
  });
};

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
          recaptcha: Joi.string().required(),
        },
      },
    },
    handler(request, reply) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${config.captchaSecret}&response=${request.payload.recaptcha}`;

      req(verifyUrl, (error, response, body) => {
        const result = JSON.parse(body);

        if (result.success) sendMail(request);

        reply.view('pages/contact-us/contact-us', data);
      });
    },
  });
};
