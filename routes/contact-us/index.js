'use strict';

const config = require('../../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');
const request = require('request');

const transporter = nodemailer.createTransport(config.transporter);

const sendMail = function sendMail(req) {
  const emailConfig = {};
  emailConfig.from = req.payload.email;
  emailConfig.to = config.emailTo;
  emailConfig.subject = 'My Choice Homes';
  emailConfig.text = req.payload.message;

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
    handler(req, reply) {
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
    handler(req) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${config.captchaSecret}&response=${req.payload.recaptcha}`;

      request(verifyUrl, (error, response, body) => {
        const result = JSON.parse(body);

        if (result.success) sendMail(req);
      });
    },
  });
};
