import rimraf from 'rimraf';

/**
 * clean public directory
 * @param cb
 */
export function clean(cb) {
  rimraf('public/assets', cb);
}
