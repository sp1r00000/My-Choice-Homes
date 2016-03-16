import { forEach } from '../helpers/for-each';

/**
 * open / close mobile menu
 */
export function toggleNavbar() {
  const icon = document.querySelector('[data-glyph="menu"');

  icon.addEventListener('click', () => {
    const nav = document.querySelector('.mch-navbar');
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
