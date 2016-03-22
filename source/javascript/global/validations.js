/**
 * add danger class
 * @param element (form-group)
 */
export function addDangerClass(element) {
  const hasDanger = element.classList.contains('has-danger');
  if (!hasDanger) element.classList.add('has-danger');
}

/**
 * remove danger class
 * @param element (form-group)
 */
export function removeDangerClass(element) {
  const hasDanger = element.classList.contains('has-danger');
  if (hasDanger) element.classList.remove('has-danger');
}

/**
 * display error message
 * @param element (field)
 * @param message
 */
export function displayMessage(element, message) {
  const parent = element.parentElement;
  const last = parent.lastElementChild;
  const hasMessage = last.classList.contains('mch-error');

  if (!hasMessage) {
    const tag = document.createElement('span');
    const text = document.createTextNode(message);

    tag.appendChild(text);
    tag.classList.add('mch-error');

    parent.appendChild(tag);
  }
}

/**
 * remove error message
 * @param element (form-group)
 */
export function removeMessage(element) {
  const last = element.lastElementChild;
  const hasError = last.classList.contains('mch-error');

  if (hasError) element.removeChild(last);
}

export default {
  /**
   * validates name field
   * @param event
   * @param element (field)
   * @returns {boolean}
   */
  nameField(event, element) {
    const e = event;
    const value = element.value;

    /**
     * error if no value entered
     */
    if (value === null || value === '') {
      e.preventDefault();

      addDangerClass(element.parentElement);
      displayMessage(element, 'Please enter your name');

      e.valid = false;

      return false;
    }

    /**
     * error if value too short
     */
    if (value.length < 3) {
      e.preventDefault();

      addDangerClass(element.parentElement);
      displayMessage(element, 'Please enter at least 3 characters');

      e.valid = false;

      return false;
    }

    e.valid = true;

    return true;
  },

  /**
   * validates email field
   * @param event
   * @param element (field)
   */
  emailField(event, element) {
    const e = event;
    e.preventDefault();

    const value = element.value;
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(value)) {
      addDangerClass(element.parentElement);
      displayMessage(element, 'Please enter a valid email');

      e.valid = false;

      return false;
    }

    e.valid = true;

    return true;
  },

  /**
   * watch field for key up changes
   * remove danger class
   * remove error message
   * @param element (field)
   */
  watchField(element) {
    element.addEventListener('keyup', () => {
      removeDangerClass(element.parentElement);
      removeMessage(element.parentElement);
    });
  },
};
