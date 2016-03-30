'use strict';

const config = require('../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');
const request = require('request');

const transporter = nodemailer.createTransport(config.transporter);

const sendMail = function sendMail(req, reply) {
  const emailConfig = {};
  emailConfig.to = config.emailTo;
  emailConfig.subject = 'My Choice Homes';
  emailConfig.html = req.payload.comment;

  transporter.sendMail(emailConfig, error => {
    if (error) reply('Sorry, there was an issue.');

    reply('You\'re comment has been sent for approval.');
  });
};

module.exports = function contactUs(server) {
  server.route({
    method: 'POST',
    path: '/about-us/quotes',
    config: {
      validate: {
        payload: {
          name: Joi.string().min(3).required(),
          comment: Joi.string().min(0).required(),
          recaptcha: Joi.string().required(),
        },
      },
    },
    handler(req, reply) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${config.captchaSecret}&response=${req.payload.recaptcha}`;

      request(verifyUrl, (error, response, body) => {
        if (error) throw error;

        const result = JSON.parse(body);
        if (result.success) sendMail(req, reply);
      });
    },
  });
};
