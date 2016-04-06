import { forEach } from '../helpers';

/**
 * insert iconic icon into element
 * class format: mch- + glyph name
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

const insertIcons = function insertIcons(icons) {

  function setup(elements, icon) {
    forEach(elements, (index, item) => {
      createIcon(item, icon);
    });
  }

  icons.forEach(item => {
    const elements = document.querySelectorAll(`.${item}`);
    const icon = item.substr(4, item.length);

    setup(elements, icon);
  });
};

export default insertIcons;
