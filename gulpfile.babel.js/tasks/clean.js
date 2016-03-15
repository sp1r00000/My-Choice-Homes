import rimraf from 'rimraf';

export function clean(cb) {
  rimraf('public', cb);
}
