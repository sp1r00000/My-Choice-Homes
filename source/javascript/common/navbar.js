import { switchClass } from '../helpers';
import currentBreakpoint from './current-breakpoint';

/**
 * insert fixed navbar, icon & logo
 */
const createFixedNav = function addIcon() {
  const breakpoint = currentBreakpoint();

  const navbar = document.getElementsByClassName('mch-navbar')[0];

  const fixed = document.createElement('div');
  fixed.classList.add('mch-fixed-nav');

  const aTag = document.createElement('a');
  aTag.setAttribute('href', '/');

  const logo = document.createElement('img');
  logo.classList.add('mch-logo');
  logo.setAttribute('src', '/assets/images/logo.png');

  aTag.appendChild(logo);

  document.body.insertBefore(fixed, navbar);
  fixed.appendChild(aTag);

  if (breakpoint !== 'XL') {
    const icon = document.createElement('span');
    icon.classList.add('iconic', 'mch-menu-icon');
    icon.setAttribute('data-glyph', 'menu');
    icon.setAttribute('aria-hidden', 'true');
    fixed.appendChild(icon);
  }
};

/**
 * add menu-open class to body when icon clicked
 */
const toggleNav = function toggleNav() {
  const icon = document.getElementsByClassName('mch-menu-icon')[0];

  icon.addEventListener('click', event => {
    if (event.target === icon) switchClass(document.body, 'navbar-close', 'navbar-open');
  });
};

/**
 * add animate class to logo if scrolled...
 */
const navLogo = function navLogo() {
  const breakpoint = currentBreakpoint();
  const logo = document.getElementsByClassName('mch-logo')[0];

  if (breakpoint === 'XL') {
    if ((window.pageYOffset || document.body.scrollTop) > 100) {
      TweenLite.to(logo, 0.2, {
        width: '4rem',
        height: '3rem',
        padding: '0',
      });
    } else {
      TweenLite.to(logo, 0.2, {
        width: '10rem',
        height: '8rem',
        padding: '3.4rem 1.7rem 2rem 1rem',
      });
    }
  }

  window.addEventListener('scroll', navLogo);
  window.addEventListener('resize', navLogo);
};

export default {
  createFixedNav,
  toggleNav,
  navLogo,
};
