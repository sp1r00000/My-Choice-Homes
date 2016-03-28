'use strict';

const config = require('../config');

const nodemailer = require('nodemailer');
const Joi = require('joi');
const request = require('request');

const transporter = nodemailer.createTransport(config.transporter);

const sendMail = function sendMail(req) {
  const emailConfig = {};
  emailConfig.from = req.payload.email;
  emailConfig.to = config.emailTo;
  emailConfig.subject = 'My Choice Homes';
  emailConfig.html = req.payload.message;

  transporter.sendMail(emailConfig, error => {
    if (error) throw error;
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
    handler(req) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${config.captchaSecret}&response=${req.payload.recaptcha}`;

      request(verifyUrl, (error, response, body) => {
        if (error) throw error;

        const result = JSON.parse(body);
        if (result.success) sendMail(req);
      });
    },
  });
};
