/**
 * accordion
 */
export default {
  accordion() {
    const acc = document.querySelector('.accordion');

    acc.addEventListener('click', event => {
      const target = event.target;

      if (target.className === 'accordion-title') {
        target.nextElementSibling.classList.toggle('open');
      }
    });
  },
};
