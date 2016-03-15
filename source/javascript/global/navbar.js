import { forEach } from '../helpers/for-each';

/**
 * open / close mobile menu
 */
export function toggleNavbar() {
  const icon = document.querySelector('[data-glyph="menu"');
  const nav = document.querySelector('.mch-navbar');

  icon.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

/**
 * set height of menu items
 */
export function navItem() {
  const fixed = document.querySelector('.mch-fixed-navbar').clientHeight;
  const nav = document.querySelector('.mch-navbar');
  const links = document.querySelectorAll('.mch-navbar a');
  const height = (nav.clientHeight - fixed) / links.length;

  forEach(links, index => {
    links[index].style.height = `${height}px`;
  });
}

export { toggleNavbar, navItem };
