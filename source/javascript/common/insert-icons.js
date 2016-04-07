import { forEach } from '../helpers';

/**
 * create new span node &
 * append to element
 * @param element
 * @param icon
 */
const createIcon = function createIcon(element, icon) {
  const elm = element;
  const span = document.createElement('span');
  span.classList.add('iconic');
  span.setAttribute('data-glyph', icon);
  span.setAttribute('aria-hidden', 'true');

  elm.innerText = '';
  elm.appendChild(span);
};

/**
 * get elements with class &
 * pass icon name
 * @param arrayOfClassNames
 */
const insertIcons = function insertIcons(arrayOfClassNames) {
  arrayOfClassNames.forEach(className => {
    const elements = document.getElementsByClassName(className);
    const icon = className.substr(4, className.length);

    forEach(elements, (index, element) => {
      createIcon(element, icon);
    });
  });
};

export default insertIcons;
