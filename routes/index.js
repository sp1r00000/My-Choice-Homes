'use strict';

const useragent = require('useragent');

const tmpData = require('../scripts/careers/careers.json');

module.exports = function routes(server) {
  const routesConfig = require('../routes/routes-config');

  const cacheDate = new Date();

  /**
   * generate new Date if cacheDate
   * is more than 1 day behind
   * @param currentDate
   * @returns Date
   */
  const date = function date(currentDate) {
    const newDate = new Date();
    const timeDifference = Math.abs(newDate.getTime() - currentDate.getTime());
    const dateDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (dateDifference > 1) return newDate;

    return currentDate;
  };

  routesConfig.forEach(route => {
    server.route({
      method: 'GET',
      path: route.path,
      handler: (req, reply) => {
        const agent = useragent.parse(req.headers['user-agent']);
        const db = req.server.plugins['hapi-mongodb'].db;

        db.collection(route.collection).findOne((error, result) => {
          if (error) throw error;

          let data;

          if (req.params.home) {
            data = result[req.params.home];
          } else {
            data = result[route.subCollection];
          }

          if (route.subCollection === 'careers') data.jobs = tmpData;

          if (result.links) data.links = result.links;

          /**
           * conditional css for ie
           */
          if (agent.family === 'IE') {
            data.css = '/assets/stylesheets/app.ie.css';
          } else {
            data.css = '/assets/stylesheets/app.css';
          }

          reply.view(route.view, data).header('Last-Modified', date(cacheDate).toUTCString());
        });
      },
    });
  });
};
