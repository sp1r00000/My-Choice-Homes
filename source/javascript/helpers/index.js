/**
 * loop over non live NodeLists.
 * eg querySelectorAll
 */
const forEach = function forEach(array, cb, scope) {
  for (let i = 0, l = array.length; i < l; i++) {
    cb.call(scope, i, array[i]);
  }
};

export default { forEach };
