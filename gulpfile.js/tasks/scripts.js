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
