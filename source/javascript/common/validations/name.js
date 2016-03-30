import { addErrorClasses, displayError } from './utils';

/**
 * validates name
 * @param event
 * @param element (field)
 * @returns {boolean}
 */
const validateName = function nameField(event, element) {
  const value = element.value;

  /**
   * error if no value entered
   */
  if (value === null || value === '') {
    event.preventDefault();

    addErrorClasses(element);
    displayError(element, 'Please enter your name');

    return false;
  }

  /**
   * error if value too short
   */
  if (value.length < 3) {
    event.preventDefault();

    addErrorClasses(element);
    displayError(element, 'Please enter at least 3 characters');

    return false;
  }

  return true;
};

export default validateName;
