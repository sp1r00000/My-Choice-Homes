'use strict';

const gulp = require('gulp');

/**
 * watch source files for changes
 * run eslint when javascript is modified
 */
gulp.task('watch', () => {
  gulp.watch('source/javascript/**/*.js', ['eslint']);
  gulp.watch('source/scss/**/*.scss', ['scss']);
});
