'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

/**
 * compile es6 into es5
 */
gulp.task('scripts', () => {
  return gulp.src('source/javascript/**/*')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('public/assets/javascript'));
});

/**
 * jQuery for bootstrap
 */
gulp.task('jquery', () => {
  return gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('public/assets/javascript'));
});

/**
 * bootstrap script
 */
gulp.task('bootstrap-script', () => {
  return gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('public/assets/javascript'));
});
