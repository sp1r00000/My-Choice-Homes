'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 * run default tasks then watch for changes
 */
gulp.task('default', () => {
  runSequence(
    ['scripts', 'jquery', 'bootstrap-script', 'scss', 'bootstrap-scss'],
    'watch'
  );
});
