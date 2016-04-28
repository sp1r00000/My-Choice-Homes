/**
 * toggle/switch from class a to b
 * @param element
 * @param from class
 * @param to class
 */
export function switchClass(element, from, to) {
  if (element.classList.contains(to)) {
    element.classList.remove(to);
    element.classList.add(from);
  } else {
    element.classList.remove(from);
    element.classList.add(to);
  }
}

/**
 * returns true if value exists in array
 * @param value
 * @param array
 * @returns {boolean}
 */
export function arrayContainsValue(value, array) {
  return array.indexOf(value) > -1;
}
