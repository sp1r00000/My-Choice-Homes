import { switchClass } from '../helpers';

/**
 * insert fixed navbar, icon & logo
 */
const createFixedNav = function addIcon() {
  const navbar = document.getElementsByClassName('mch-navbar')[0];

  const fixed = document.createElement('div');
  fixed.classList.add('mch-fixed-nav');

  const icon = document.createElement('span');
  icon.classList.add('iconic', 'mch-menu-icon');
  icon.setAttribute('data-glyph', 'menu');
  icon.setAttribute('aria-hidden', 'true');

  document.body.insertBefore(fixed, navbar);
  fixed.appendChild(icon);
};

/**
 * add open class to menu when
 * icon clicked
 */
const toggleNav = function toggleNav() {
  const icon = document.getElementsByClassName('mch-menu-icon')[0];

  icon.addEventListener('click', event => {
    // const navbar = document.getElementsByClassName('mch-navbar')[0];
    // Todo: move nav tag into a new div for overflow

    if (event.target === icon) switchClass(document.body, 'close', 'open');
  });
};

/**
 * add animate class to navbar
 * on scroll
 */
const navLogo = function navLogo() {
  const body = document.body;
  const nav = document.querySelector('.mch-fixed-navbar');

  function scroll() {
    if ((window.pageYOffset || body.scrollTop) > 100) {
      if (!nav.classList.contains('animate')) {
        setTimeout(() => {
          nav.classList.add('animate');
        }, 10);
      }
    } else {
      nav.classList.remove('animate');
    }
  }

  window.addEventListener('scroll', scroll);
};

export default {
  createFixedNav,
  toggleNav,
  navLogo,
};
