'use strict';

const dirToJson = require('dir-to-json');
const fs = require('fs');

const genDataConfig = function genDataConfig() {
  dirToJson('../../tmp-data')
    .then(dirTree => {
      const config = JSON.stringify(dirTree);

      fs.writeFile(__dirname + '/config.json', config, error => {
        if (error) throw error;
      });
    })
    .catch(err => {
      throw err;
    });
};

module.exports = genDataConfig();
