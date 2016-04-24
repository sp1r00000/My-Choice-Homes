/**
 * animate dropdown
 * @param event
 * @param opener
 * @param nav
 * @param icon
 * @param height
 * @param state
 */
const openDropdown = function openList(event, opener, nav, icon, height, state) {
  if (event.target === opener || event.target === icon) {
    if (state) {
      TweenMax.to(nav, 0.1, { height: height });
      TweenMax.to(icon, 0.1, {
        rotationX: 180,
        transformOrigin: 'middle',
      });
    } else {
      TweenMax.to(nav, 0.1, { height: 0 });
      TweenMax.to(icon, 0.1, {
        rotationX: 0,
        transformOrigin: 'middle',
      });
    }
  }
};

/**
 * create/append elements
 * body click event
 */
const links = function links() {
  const opener = document.getElementsByClassName('mch-links')[0];

  if (opener) {
    const header = document.getElementsByClassName('mch-header')[0];
    header.appendChild(opener);

    const icon = document.createElement('span');
    icon.classList.add('iconic');
    icon.setAttribute('data-glyph', 'chevron-bottom');
    icon.setAttribute('aria-hidden', 'true');
    opener.appendChild(icon);

    const nav = opener.querySelector('nav');
    const height = nav.clientHeight;
    nav.style.height = 0;

    let state = false;

    opener.addEventListener('click', event => openDropdown(
      event, opener, nav, icon, height, state = !state));
  }
};

export default links();
