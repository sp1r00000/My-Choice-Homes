import gulp from 'gulp';

import { scripts } from './scripts';
import { scss } from './scss';
import { images } from './images';

/**
 * watch source files for changes
 * run eslint when javascript is modified
 */
export function watch() {
  gulp.watch('source/javascript/**/*', scripts);
  gulp.watch('source/scss/**/*', scss);
  gulp.watch('source/images/**/*', images);
}
