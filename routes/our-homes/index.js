const data = require('../../tmp-data/our-homes');

const ivyCottage = require('./ivy-cottage');
const kestralHouse = require('./kestral-house');
const kingfisherView = require('./kingfisher-view');
const mapleHouse = require('./maple-house');
const oakHouse = require('./oak-house');
const oceanPearl = require('./ocean-pearl');
const pebbleHouse = require('./pebble-house');

/**
 * route configuration for
 * our-homes page
 * @param server
 */
module.exports = function ourHomes(server) {
  server.route({
    method: 'GET',
    path: '/our-homes',
    handler: (request, reply) => {
      reply.view('pages/our-homes/our-homes', data);
    },
  });

  /**
   * setup child routes
   */
  ivyCottage(server);
  kestralHouse(server);
  kingfisherView(server);
  mapleHouse(server);
  oakHouse(server);
  oceanPearl(server);
  pebbleHouse(server);
};
