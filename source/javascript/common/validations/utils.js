/**
 * add danger class
 * @param element (form-group)
 */
export function addErrorClasses(element) {
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
export function removeErrorClasses(element) {
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
export function displayError(element, message) {
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
export function removeError(element) {
  const last = element.lastElementChild;
  const hasError = last.classList.contains('mch-error');

  if (hasError) element.removeChild(last);
}

/**
 * watch field for key up changes
 * remove danger class
 * remove error message
 * @param element (field)
 */
const watchField = function watchField(element) {
  element.addEventListener('keyup', () => {
    removeErrorClasses(element);
    removeError(element.parentElement);
  });
};

export default watchField;
