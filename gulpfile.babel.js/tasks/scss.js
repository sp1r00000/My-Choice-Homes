import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

/**
 * custom scss
 */
export function scss() {
  return gulp.src('source/scss/app.scss')
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

/**
 * bootstrap flex scss
 */
export function bootstrapScss() {
  return gulp.src('bower_components/bootstrap/scss/bootstrap-flex.scss')
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

/**
 * iconic scss
 */
export function iconicScss() {
  return gulp.src('source/iconic/scss/iconic-glyphs.scss')
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
