import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

/**
 * compile es6 into es5
 */
export function scripts() {
  return browserify({
    entries: 'source/javascript/app',
    extensions: ['.js'],
    debug: true,
  })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/assets/javascript'));
}
