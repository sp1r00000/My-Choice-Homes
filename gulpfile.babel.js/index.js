import gulp from 'gulp';

import { nodemon } from './tasks/nodemon';
import { scripts } from './tasks/scripts';
import { scss } from './tasks/scss';
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
    iconicFonts,
    images
  ),
  watch
));

/**
 * start server
 */
gulp.task('nodemon', gulp.parallel(nodemon));

/**
 * execute scripts task
 */
gulp.task('scripts', gulp.parallel(scripts));

/**
 * execute scss task
 */
gulp.task('scss', gulp.parallel(scss));

/**
 * execute fonts task
 */
gulp.task('iconic-fonts', gulp.parallel(iconicFonts));

/**
 * execute images task
 */
gulp.task('images', gulp.parallel(images));

/**
 * execute watch task
 */
gulp.task('watch', gulp.parallel(watch));

/**
 * run unit tests
 */
gulp.task('test', done => {
  preTest();
  test(done);
});
