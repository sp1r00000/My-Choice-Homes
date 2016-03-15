const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

const server = new Hapi.Server();

const routes = require('./routes');

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
 * register good options
 * with server
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
   * serve static files from
   * public directory
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
   * setup top level routes
   */
  routes.aboutUs(server);
  routes.activities(server);
  routes.careers(server);
  routes.contactUs(server);
  routes.home(server);
  routes.myChoiceSchool(server);
  routes.ourHomes(server);
  routes.referrals(server);
  routes.services(server);

  server.start((err) => {
    if (err) throw err;
  });
});
