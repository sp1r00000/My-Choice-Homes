'use strict';

const config = require('./config');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const MongoDB = require('hapi-mongodb');
const PrerenderPlugin = require('hapi-prerender');

const routes = require('./routes');
const contact = require('./routes/contact-us');

const server = new Hapi.Server({
  cache: [
    {
      name: 'mongoCache',
      engine: require('catbox-mongodb'),
      host: '127.0.0.1',
      partition: 'mch',
    },
  ],
});

const good = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: ['error'], response: '*' },
  }],
};

server.register({
  register: require('good'),
  options: good,
});

server.connection({
  host: 'localhost',
  port: 8000,
});

server.register({
  register: PrerenderPlugin,
  options: {
    token: config.prerender,
  },
});

server.register({
  register: MongoDB,
  options: config.mongo,
}, err => {
  if (err) throw err;
});

server.register([Inert, Vision], () => {
  /**
   * configure views
   */
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

  server.start(err => {
    if (err) throw err;
  });
});
