import gulp from 'gulp';

/**
 * images
 */
export function images() {
  return gulp.src('source/images/**/*')
    .pipe(gulp.dest('public/assets/images'));
}
