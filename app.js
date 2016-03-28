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

/**
 * connection config
 */
server.connection({
  host: 'localhost',
  port: 8000,
});

/**
 * register prerender plugin
 */
server.register({
  register: PrerenderPlugin,
  options: {
    token: config.prerender,
  },
});

/**
 * good options config
 * @type {{reporters: *[]}}
 */
const good = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: ['error'], response: '*' },
  }],
};

/**
 * register good options
 * with server
 */
server.register({
  register: require('good'),
  options: good,
});

server.register({
  register: MongoDB,
  options: config.mongo,
}, err => {
  if (err) throw err;
});

server.register([Inert, Vision], () => {
  /**
   * configure templates
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

  /**
   * serve static files from
   * public directory
   * cache-control 1y
   */
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
