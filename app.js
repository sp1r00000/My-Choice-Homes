'use strict';

const config = require('./config');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const MongoDB = require('hapi-mongodb');
const PrerenderPlugin = require('hapi-prerender');

const routes = require('./routes');
const contact = require('./routes/contact-us');
const quotes = require('./routes/quotes');
const ourStaff = require('./routes/our-staff');

const server = new Hapi.Server({
  cache: [
    {
      name: 'mongoCache',
      engine: require('catbox-mongodb'),
      host: config.host,
      uri: config.mongo.url,
      partition: 'mch',
    },
  ],
});

server.register({
  register: require('good'),
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: { log: ['error'], response: '*' },
    }],
  },
});

server.connection({
  host: config.host,
  port: config.port,
});

server.register({
  register: PrerenderPlugin,
  options: {
    serviceUrl: config.prerender.serviceUrl,
  },
});

server.register({
  register: MongoDB,
  options: config.mongo,
}, err => {
  if (err) throw err;
});

server.register([Inert, Vision], () => {
  server.views({
    engines: {
      html: require('handlebars'),
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default',
    partialsPath: 'views/partials',
    helpersPath: 'views/helpers',
    relativeTo: __dirname,
  });

  server.route({
    method: 'GET',
    path: '/{filename*}',
    handler: {
      directory: {
        path: `${__dirname}/public`,
        listing: false,
        index: false,
      },
    },
    config: {
      cache: {
        expiresIn: 31536000,
        privacy: 'public',
      },
    },
  });

  routes(server);
  contact(server);
  quotes(server);
  ourStaff(server);

  server.start(err => {
    if (err) console.log('err', err);
  });
});
