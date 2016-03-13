'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * compile scss
 */
gulp.task('scss', () => {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

/**
 * compile scss
 */
gulp.task('bootstrap-scss', () => {
  return gulp.src('bower_components/bootstrap/scss/bootstrap.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
});
