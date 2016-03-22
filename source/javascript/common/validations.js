/**
 * add danger class
 * @param element (form-group)
 */
export function addDangerClass(element) {
  const hasDanger = element.parentElement.classList.contains('has-danger');

  if (!hasDanger) {
    element.classList.add('form-control-danger');
    element.parentElement.classList.add('has-danger');
  }
}

/**
 * remove danger class
 * @param element (form-group)
 */
export function removeDangerClass(element) {
  const hasDanger = element.parentElement.classList.contains('has-danger');

  if (hasDanger) {
    element.classList.remove('form-control-danger');
    element.parentElement.classList.remove('has-danger');
  }
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
    tag.classList.add('mch-error', 'small');

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
    const value = element.value;

    /**
     * error if no value entered
     */
    if (value === null || value === '') {
      event.preventDefault();

      addDangerClass(element);
      displayMessage(element, 'Please enter your name');

      return false;
    }

    /**
     * error if value too short
     */
    if (value.length < 3) {
      event.preventDefault();

      addDangerClass(element);
      displayMessage(element, 'Please enter at least 3 characters');

      return false;
    }

    return true;
  },

  /**
   * validates email field
   * @param event
   * @param element (field)
   */
  emailField(event, element) {
    event.preventDefault();

    const value = element.value;
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(value)) {
      addDangerClass(element);
      displayMessage(element, 'Please enter a valid email');

      return false;
    }

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
      removeDangerClass(element);
      removeMessage(element.parentElement);
    });
  },
};
