'use strict';

/**
 * temporary script
 * lets get some json for mongo
 */

const fs = require('fs');
const config = require('./config');

/**
 * require existing data modules
 * convert to json
 * save to data directory
 * @param path
 * @param name
 */
const writeFile = function writeFile(path, name) {
  if (name !== 'index.js') {
    const newPath = `../../data/${path}`;
    const oldPath = `../../tmp-data/${path}`;

    if (!fs.existsSync('../../data')) fs.mkdirSync('../../data');
    if (!fs.existsSync(newPath)) fs.mkdirSync(newPath);

    let data = require(oldPath);
    data = JSON.stringify(data);

    fs.writeFile(`${newPath}/${name}.json`, data, error => {
      if (error) throw error;
    });
  }
};

/**
 * perform writeFile fn
 * for each child
 */
const nestedArrays = function nestedArrays() {
  config.children.forEach(firstChild => {
    writeFile(firstChild.path, firstChild.name);

    if (firstChild.children) {
      firstChild.children.forEach(secondChild => {
        writeFile(secondChild.path, secondChild.name);

        if (secondChild.children) {
          secondChild.children.forEach(thirdChild => {
            writeFile(thirdChild.path, thirdChild.name);
          });
        }
      });
    }
  });
};

module.exports = nestedArrays();
