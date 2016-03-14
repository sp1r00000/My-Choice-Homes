import gulp from 'gulp';

/**
 * iconic fonts
 */
export function iconicFonts() {
  return gulp.src('source/iconic/fonts/*')
    .pipe(gulp.dest('public/assets/fonts'));
}
