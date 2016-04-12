'use strict';

const config = require('../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');
const request = require('request');

const transporter = nodemailer.createTransport(config.transporter);

const sendMail = function sendMail(req, reply) {
  const emailConfig = {};
  emailConfig.from = `My Choice Homes <${req.payload.email}>`;
  emailConfig.to = config.emailTo;
  emailConfig.subject = 'My Choice Children\'s Homes';
  emailConfig.html = req.payload.message;

  transporter.sendMail(emailConfig, error => {
    if (error) {
      reply('Sorry, there was an issue.');
    } else {
      reply('You\'re message has been sent and we will get back to you very soon.');
    }
  });
};

module.exports = function contactUs(server) {
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
