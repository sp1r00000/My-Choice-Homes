import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

/**
 * images
 */
export function images() {
  return gulp.src('source/images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
    }))
    .pipe(gulp.dest('public/assets/images'));
}
