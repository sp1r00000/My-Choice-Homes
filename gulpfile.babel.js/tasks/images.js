import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

import imagePreload from 'gulp-image-preload';

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

/**
 * generate default layout with image preload
 * @returns {*}
 */
export function preload() {
  return gulp.src('public/assets/images/**/*.{png,jpg,gif,jpeg}')
    .pipe(imagePreload({
      inline: 'views/layout/default.html',
    }))
    .pipe(gulp.dest('views/generated-layout'));
}
