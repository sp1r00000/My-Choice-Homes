'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

/**
 * connection config
 */
server.connection({
  host: 'localhost',
  port: 8000,
});

/**
 * good options config
 * @type {{reporters: *[]}}
 */
let good = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: ['error'], response: '*' },
  }],
};

/**
 * register good options with server
 */
server.register({
  register: require('good'),
  options: good,
});

server.register(require('vision'), () => {
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
    relativeTo: __dirname,
  });

  /**
   * home page
   */
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('partials/home/home');
    },
  });

  server.start();
});
