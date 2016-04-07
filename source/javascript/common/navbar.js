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

  const logo = document.createElement('img');
  logo.classList.add('mch-logo');
  logo.setAttribute('src', '/assets/images/logo.png');

  document.body.insertBefore(fixed, navbar);
  fixed.appendChild(logo);
  fixed.appendChild(icon);
};

/**
 * add open class to menu when
 * icon clicked
 */
const toggleNav = function toggleNav() {
  const icon = document.getElementsByClassName('mch-menu-icon')[0];

  icon.addEventListener('click', event => {
    if (event.target === icon) switchClass(document.body, 'close', 'open');
  });
};

/**
 * add animate class to navbar
 * on scroll
 */
const navLogo = function navLogo() {
  const logo = document.getElementsByClassName('mch-logo')[0];

  function scroll() {
    if ((window.pageYOffset || document.body.scrollTop) > 100) {
      if (!logo.classList.contains('shrink-logo')) {
        switchClass(logo, 'enlarge-logo', 'shrink-logo');
      }
    } else {
      if (!logo.classList.contains('enlarge-logo')) {
        switchClass(logo, 'shrink-logo', 'enlarge-logo');
      }
    }
  }

  window.addEventListener('scroll', scroll);
};

export default {
  createFixedNav,
  toggleNav,
  navLogo,
};
