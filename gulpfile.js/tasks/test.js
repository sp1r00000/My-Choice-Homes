'use strict';

const gulp = require('gulp');
const Server = require('karma').Server;

/**
 * run test once and exit
 */
gulp.task('test', done => {
  new Server({
    configFile: `${__dirname}/../../karma.conf.js`,
    singleRun: true,
  }, done).start();
});
