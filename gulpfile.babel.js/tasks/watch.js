import gulp from 'gulp';

const paths = {
  scripts: ['./source/javascript/**/*.js'],
  scss: './source/scss/**/*.scss',
};

/**
 * watch source files for changes
 * run eslint when javascript is modified
 */
export function watch() {
  gulp.watch(paths.scripts);
  gulp.watch(paths.scss);
}
