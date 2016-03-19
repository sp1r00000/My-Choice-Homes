/**
 * add danger class
 * @param element (form-group)
 */
export function addDangerClass(element) {
  if (!element.classList.contains('has-danger')) {
    element.classList.add('has-danger');
  }
}

/**
 * remove danger class
 * @param element (form-group)
 */
export function removeDangerClass(element) {
  if (element.classList.contains('has-danger')) {
    element.classList.remove('has-danger');
  }
}

/**
 * display custom error message
 * @param element (form-group)
 * @param message
 */
export function displayMessage(element, message) {
  const parent = element.parentElement;
  const hasDanger = element.classList.contains('has-danger');

  if (!hasDanger) {
    const tag = document.createElement('span');
    const text = document.createTextNode(message);

    tag.appendChild(text);
    tag.classList.add('mch-error');

    parent.appendChild(tag);
  }
}

/**
 * @param element (form-group)
 */
export function removeMessage(element) {
  const last = element.lastElementChild;
  const hasError = last.classList.contains('mch-error');

  if (hasError) element.removeChild(last);
}

export default {
  /**
   * validates a name field
   * @param event
   * @param name
   * @returns {boolean}
   */
  nameField(event, name) {
    /**
     * error if no value entered
     */
    if (name.value === null || name.value === '') {
      event.preventDefault();

      addDangerClass(name.parentElement);
      displayMessage(name, 'Please enter your name');

      return false;
    }

    /**
     * error if value too short
     */
    if (name.value.length < 3) {
      event.preventDefault();

      addDangerClass(name.parentElement);
      displayMessage(name, 'Please enter at least 3 characters');

      return false;
    }

    return true;
  },

  /**
   * watch field for key up changes
   * remove danger class
   * @param element (field)
   */
  watchField(element) {
    element.addEventListener('keyup', () => {
      removeDangerClass(element.parentElement);
      removeMessage(element.parentElement);
    });
  },
};
