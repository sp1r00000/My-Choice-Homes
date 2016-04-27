import gulp from 'gulp';

export function bowerJs() {
  return gulp.src([
    'bower_components/gsap/src/minified/TweenMax.min.js',
    'bower_components/es6-promise-polyfill/promise.min.js',
    'bower_components/requirejs/require.js',
  ])
    .pipe(gulp.dest('public/assets/lib'));
}

export function bowerCss() {
  return gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(gulp.dest('public/assets/lib'));
}
