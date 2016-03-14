/**
 * navbar function
 */
export function navbar() {
  const navbar = document.getElementsByClassName('[data-glyph="menu"]');
  console.log('navbar');
  navbar.addEventListener('click', () => {
    console.log('click');
    navbar.classList.toggle('open');
  });
}

export default navbar();
