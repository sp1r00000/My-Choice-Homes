import gulpNodemon from 'gulp-nodemon';

/**
 * start server
 */
export function nodemon() {
  gulpNodemon({
    script: './app.js',
    ext: 'js',
  });
}
