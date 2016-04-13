import gulp from 'gulp';

import { nodemon } from './tasks/nodemon';
import { clean } from './tasks/clean';
import { scripts } from './tasks/scripts';
import { scss } from './tasks/scss';
import { iconicFonts } from './tasks/fonts';
import { images } from './tasks/images';
import { bowerJs, bowerCss } from './tasks/bower';
import { watch } from './tasks/watch';

import { preTest, test } from './tasks/test';

/**
 * default task builds everything
 * then watches for changes
 */
gulp.task('default', gulp.series(
  clean,
  gulp.parallel(
    scripts,
    scss,
    iconicFonts,
    images,
    bowerJs,
    bowerCss
  ),
  watch
));

/**
 * build everything
 * then runs tests
 */
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    scripts,
    scss,
    iconicFonts,
    images,
    bowerJs,
    bowerCss
  )
));

/**
 * start server
 */
gulp.task('nodemon', gulp.parallel(nodemon));

/**
 * run clean task
 */
gulp.task('clean', gulp.parallel(clean));

/**
 * run scripts task
 */
gulp.task('scripts', gulp.parallel(scripts));

/**
 * run scss task
 */
gulp.task('scss', gulp.parallel(scss));

/**
 * run fonts task
 */
gulp.task('iconic-fonts', gulp.parallel(iconicFonts));

/**
 * run images task
 */
gulp.task('images', gulp.parallel(images));

/**
 * run watch task
 */
gulp.task('watch', gulp.parallel(watch));

/**
 * run unit tests
 */
gulp.task('test', done => {
  preTest();
  test(done);
});
