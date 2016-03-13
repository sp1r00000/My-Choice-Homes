'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * iconic scss
 */
gulp.task('iconic-scss', () => {
  return gulp.src('source/iconic/scss/iconic-glyphs.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

/**
 * iconic fonts
 */
gulp.task('iconic-fonts', () => {
  return gulp.src('source/iconic/fonts/*')
    .pipe(gulp.dest('public/assets/fonts'));
});
