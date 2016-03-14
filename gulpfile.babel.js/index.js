import gulp from 'gulp';

import { nodemon } from './tasks/nodemon';
import { scripts } from './tasks/scripts';
import { scss, bootstrapScss, iconicScss } from './tasks/scss';
import { iconicFonts } from './tasks/fonts';
import { images } from './tasks/images';
import { watch } from './tasks/watch';

import { preTest, test } from './tasks/test';

/**
 * default task builds everything
 * starts server
 * then watches for changes
 */
gulp.task('default', gulp.series(
  gulp.parallel(
    scripts,
    scss,
    bootstrapScss,
    iconicScss,
    iconicFonts,
    images
  ),
  nodemon,
  watch
));

/**
 * start server
 */
gulp.task('nodemon', gulp.parallel(nodemon));

/**
 * execute scripts tasks
 */
gulp.task('scripts', gulp.parallel(scripts));

/**
 * execute scss tasks
 */
gulp.task('scss', gulp.parallel(scss, bootstrapScss, iconicScss));

/**
 * execute fonts tasks
 */
gulp.task('iconic-fonts', gulp.parallel(iconicFonts));

/**
 * execute images tasks
 */
gulp.task('images', gulp.parallel(images));

/**
 * run unit tests
 */
gulp.task('test', done => {
  preTest();
  test(done);
});
