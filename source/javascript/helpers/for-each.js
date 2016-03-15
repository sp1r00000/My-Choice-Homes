/**
 * loop over non live NodeLists.
 * eg querySelectorAll
 */
export function forEach(array, cb, scope) {
  for (let i = 0; i < array.length; i++) {
    cb.call(scope, i, array[i]);
  }
}
