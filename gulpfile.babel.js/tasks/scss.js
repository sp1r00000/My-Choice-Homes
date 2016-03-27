import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import prefix from 'gulp-autoprefixer';

/**
 * prefix css
 * generate source maps
 */
export function scss() {
  return sass([
    'source/scss/app.scss',
    'source/iconic/scss/iconic-glyphs.scss',
    'source/scss/bootstrap-flex.scss',
    'source/scss/ie.scss',
  ], { sourcemap: true, style: 'compact' })
    .pipe(prefix('last 2 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/stylesheets'));
}
