'use strict';

const gulp = require('gulp');

/**
 * images
 */
gulp.task('images', () => {
  return gulp.src('source/images/*')
    .pipe(gulp.dest('public/assets/images'));
});
