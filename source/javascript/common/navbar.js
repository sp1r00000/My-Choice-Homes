import currentBreakpoint from './current-breakpoint';

/**
 * create logo
 * @returns {Element}
 */
const createLogo = function createLogo() {
  const link = document.createElement('a');
  link.setAttribute('href', '/');

  const logo = document.createElement('img');
  logo.classList.add('mch-logo');
  logo.setAttribute('src', '/assets/images/logo.png');
  link.appendChild(logo);

  return link;
};

/**
 * create fixed nav (div)
 * @returns {Element}
 */
const createFixedNav = function createFixedNav() {
  const fixed = document.createElement('div');
  fixed.classList.add('mch-fixed-nav');

  return fixed;
};

/**
 * create menu icon
 * @returns {Element}
 */
const createMenuIcon = function createMenuIcon() {
  const icon = document.createElement('span');
  icon.classList.add('iconic');
  icon.classList.add('mch-menu-icon');
  icon.setAttribute('data-glyph', 'menu');
  icon.setAttribute('aria-hidden', 'true');

  return icon;
};

/**
 * animate mobile nav
 * when open set body overflow to hidden
 * @param state
 */
const animateMobileNav = function animateMobileNav(state) {
  const navbar = document.getElementsByClassName('mch-navbar')[0];

  if (state) {
    document.body.style.overflow = 'auto';
    TweenLite.to(navbar, 0.1, { right: '-95%' });
  } else {
    document.body.style.overflow = 'hidden';
    TweenLite.to(navbar, 0.1, { right: 0 });
  }
};

/**
 * add click event to menu icon
 */
const toggleNav = function toggleNav() {
  const icon = document.getElementsByClassName('mch-menu-icon')[0];
  let state = true;

  icon.addEventListener('click', () => animateMobileNav(state = !state));
};

/**
 * animate logo for XL devices
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

  window.addEventListener('resize', () => {
    logo.style = '';
  });
};

/**
 * insert fixed navbar, icon & logo
 */
const buildFixedNav = function foo() {
  const navbar = document.getElementsByClassName('mch-navbar')[0];
  const fixed = createFixedNav();
  const logo = createLogo();
  const icon = createMenuIcon();

  document.body.insertBefore(fixed, navbar);
  fixed.appendChild(logo);
  fixed.appendChild(icon);

  navLogo();
  toggleNav();

  window.addEventListener('resize', () => {
    navbar.style = '';
  });
};

export default buildFixedNav;
