import { displayError } from './utils';

/**
 * checks recaptcha has value
 * @param event
 * @param element
 * @returns {boolean}
 */
export default function validateRecaptcha(event, element) {
  event.preventDefault();

  const value = element.value;

  if (value === null || value === '') {
    displayError(element, 'Please verify you\'re human');

    return false;
  }

  return true;
}
