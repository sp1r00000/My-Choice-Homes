import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

/**
 * prefix css
 * generate source maps
 */
export function scss() {
  const processors = [
    cssnext,
    cssnano(),
  ];

  return sass([
    /*'source/scss/app.scss',
    'source/scss/app.ie.scss',*/
    'source/scss/app.nobs.scss',
    'source/iconic/scss/iconic-glyphs.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/stylesheets'));
}
