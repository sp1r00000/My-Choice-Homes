import { forEach } from '../helpers/for-each';

/**
 * navbar function
 */
export function toggleNavbar() {
  const icon = document.querySelector('[data-glyph="menu"');
  const nav = document.querySelector('.mch-navbar');

  icon.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

export function navItem() {
  const nav = document.querySelector('.mch-navbar');
  const links = document.querySelectorAll('.mch-navbar a');
  const height = nav.clientHeight / links.length;

  forEach(links, (index) => {
    links[index].style.height = `${height}px`;
  });
}

export { toggleNavbar, navItem };
