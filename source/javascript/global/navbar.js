import helpers from '../helpers';

/**
 * set height of menu items
 */
const navItem = function navItem() {
  const fixed = document.querySelector('.mch-fixed-navbar').clientHeight;
  const nav = document.querySelector('.mch-navbar');
  const links = document.querySelectorAll('.mch-navbar a');
  const height = (nav.clientHeight - fixed) / links.length;

  helpers.forEach(links, index => {
    links[index].style.height = `${height}px`;
  });
};

/**
 * open / close mobile menu
 */
const toggleNav = function toggleNav() {
  const body = document.body;

  body.addEventListener('click', event => {
    const nav = document.querySelector('nav.mch-navbar');
    const icon = document.querySelector('.menu-icon');

    navItem();

    if (event.target === icon) {
      icon.classList.toggle('open');
      nav.classList.toggle('open');
    } else {
      if (nav.classList.contains('open')) {
        icon.classList.remove('open');
        nav.classList.remove('open');
      }
    }
  });
};

/**
 * toggle logo class on scroll
 */
const navLogo = function navLogo() {
  const body = document.body;
  const nav = document.querySelector('.mch-fixed-navbar');

  window.onscroll = function scroll() {
    if (body.scrollTop > 100) {
      if (!nav.classList.contains('animate')) {
        setTimeout(() => {
          nav.classList.add('animate');
        }, 10);
      }
    } else {
      nav.classList.remove('animate');
    }
  };
};

export default { toggleNav, navLogo };
