import { forEach } from '../helpers';

/**
 * create new span node &
 * append to element
 * @param element
 * @param icon
 * @param replace
 */
const createIcon = function createIcon(element, icon, replace) {
  const elm = element;
  const span = document.createElement('span');
  span.classList.add('iconic');
  span.setAttribute('data-glyph', icon);
  span.setAttribute('aria-hidden', 'true');

  if (replace) elm.innerText = '';

  elm.insertBefore(span, elm.firstChild);
};

/**
 * get elements with class &
 * pass icon name
 * @param arrayOfClassNames
 * @param replace
 */
const insertIcons = function insertIcons(arrayOfClassNames, replace) {
  arrayOfClassNames.forEach(className => {
    const elements = document.getElementsByClassName(className);
    const icon = className.substr(4, className.length);

    forEach(elements, (index, element) => {
      createIcon(element, icon, replace);
    });
  });
};

export default insertIcons;
