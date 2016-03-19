/**
 * display a custom error message
 * @param element (form-group)
 * @param message
 */
function displayMessage(element, message) {
  const field = element;
  const parent = field.parentElement;

  if (!parent.getElementsByTagName('span').length) {
    const tag = document.createElement('span');
    const text = document.createTextNode(message);

    tag.appendChild(text);
    tag.classList.add('mch-error');

    parent.appendChild(tag);

    field.onkeyup = function change() {
      parent.removeChild(tag);
    };
  }
}

export default {

  /**
   * validates a name field
   * @param event
   * @param name
   * @returns {boolean}
   */
  nameField: (event, name) => {

    /**
     * error if no value entered
     */
    if (name.value === null || name.value === '') {
      event.preventDefault();

      const parent = name.parentElement;
      parent.classList.add('has-danger');

      displayMessage(name, 'Please enter your name');

      return false;
    }

    /**
     * err if value too short
     */
    if (name.value.length < 3) {
      event.preventDefault();

      const parent = name.parentElement;
      parent.classList.add('has-danger');

      displayMessage(name, 'Please enter at least 3 characters');

      return false;
    }

    return true;
  },
};
