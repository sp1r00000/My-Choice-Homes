import { addErrorClasses, displayError } from './utils';

/**
 * validates email
 * @param event
 * @param element (field)
 * @returns {boolean}
 */
const validateEmail = function emailField(event, element) {
  event.preventDefault();

  const value = element.value;
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(value)) {
    addErrorClasses(element);
    displayError(element, 'Please enter a valid email');

    return false;
  }

  return true;
};

export default validateEmail;
