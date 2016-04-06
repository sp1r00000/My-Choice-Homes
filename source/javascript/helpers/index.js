/**
 * loop over non live NodeLists.
 * eg querySelectorAll
 */
export function forEach(array, cb, scope) {
  for (let i = 0, l = array.length; i < l; i++) {
    cb.call(scope, i, array[i]);
  }
}

/**
 * toggle/switch from class a to b
 * @param element
 * @param from class
 * @param to class
 */
export function switchClass(element, from, to) {
  element.classList.remove(from);
  element.classList.add(to);
}

export default {
  forEach,
  switchClass,
};
