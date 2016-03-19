import helpers from '../helpers';

export default {
  /**
   * open / close mobile menu
   */
  toggleNav() {
    const body = document.body;

    body.addEventListener('click', event => {
      const nav = document.querySelector('nav.mch-navbar');
      const icon = document.querySelector('.menu-icon');

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
  },

  /**
   * set height of menu items
   */
  navItem() {
    const fixed = document.querySelector('.mch-fixed-navbar').clientHeight;
    const nav = document.querySelector('.mch-navbar');
    const links = document.querySelectorAll('.mch-navbar a');
    const height = (nav.clientHeight - fixed) / links.length;

    helpers.forEach(links, index => {
      links[index].style.height = `${height}px`;
    });
  },

  /**
   * resize logo on scroll
   */
  navLogo() {
    const body = document.body;
    const logo = document.querySelector('.mch-logo');

    window.onscroll = function scroll() {
      if (body.scrollTop > logo.clientHeight / 2) {
        if (!logo.classList.contains('animate')) {
          setTimeout(() => {
            logo.classList.add('animate');
          }, 10);
        }
      } else {
        logo.classList.remove('animate');
      }
    };
  },
};
