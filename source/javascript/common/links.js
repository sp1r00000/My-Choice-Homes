import { switchClass } from '../helpers';

/**
 * toggle open/close classes
 * @param event
 * @param opener
 * @param icon
 */
const openDropdown = function openList(event, opener, icon) {
  if (event.target === opener || event.target === icon) {
    switchClass(opener, 'close', 'open');
  } else {
    if (opener.classList.contains('open')) {
      switchClass(opener, 'close', 'open');
    }
  }
};

/**
 * create/append elements
 * body click event
 */
const dropdown = function openList() {
  const opener = document.getElementsByClassName('mch-links')[0];

  if (opener) {
    const header = document.getElementsByClassName('mch-header')[0];

    header.appendChild(opener);

    const icon = document.createElement('span');
    icon.classList.add('iconic');
    icon.setAttribute('data-glyph', 'chevron-bottom');
    icon.setAttribute('aria-hidden', 'true');

    opener.classList.add('close');
    opener.appendChild(icon);

    document.body.addEventListener('click', event => openDropdown(event, opener, icon));
  }
};

export default dropdown;
