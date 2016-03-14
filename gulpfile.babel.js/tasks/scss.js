import gulp from 'gulp';
import gulpSass from 'gulp-sass';

/**
 * custom scss
 */
export function scss() {
  return gulp.src('source/scss/app.scss')
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(gulp.dest('public/assets/stylesheets'));
}

/**
 * bootstrap flex scss
 */
export function bootstrapScss() {
  return gulp.src('bower_components/bootstrap/scss/bootstrap-flex.scss')
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(gulp.dest('public/assets/stylesheets'));
}

/**
 * iconic scss
 */
export function iconicScss() {
  return gulp.src('source/iconic/scss/iconic-glyphs.scss')
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(gulp.dest('public/assets/stylesheets'));
}
