/**
 * todo: modularize server
 */

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

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
const good = {
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
    relativeTo: __dirname,
  });

  /**
   * serve static files from public
   */
  server.route({
    method: 'GET',
    path: '/{filename*}',
    handler: {
      directory: {
        path: __dirname + '/public',
        listing: false,
        index: false,
      },
    },
  });

  /**
   * home page
   */
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const tiles = require('./tmp-data/tiles');

      reply.view('partials/home', tiles);
    },
  });

  server.route({
    method: 'GET',
    path: '/about-us',
    handler: (request, reply) => {
      reply.view('partials/home');
    },
  });

  server.start((err) => {
    if (err) throw err;
  });
});
