import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

/**
 * prefix css for older browsers
 * minify
 * log any errors if any
 * generate source maps
 */
export function scss() {
  return gulp.src([
    'source/scss/app.scss',
    'source/iconic/scss/iconic-glyphs.scss',
    'bower_components/bootstrap/scss/bootstrap-flex.scss',
    ])
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulpSass.sync({
      outputStyle: 'compressed',
    }).on('error', gulpSass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/assets/stylesheets'));
}
