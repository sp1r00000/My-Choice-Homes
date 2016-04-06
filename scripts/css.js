'use strict';

const fs = require('fs');

const removeFlex = function removeFlex() {
  fs.readFile(`${__dirname}/../public/assets/stylesheets/app.ie.css`, (err, data) => {
    if (err) throw err;

    let test = data.toString();
    test = JSON.stringify(test);

    console.log(test);
  });
};

removeFlex();
