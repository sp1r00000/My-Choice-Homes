/**
 * toggle class for accordion
 * content
 */
const accordion = function accordion() {
  const acc = document.querySelector('.accordion');

  acc.addEventListener('click', event => {
    const target = event.target;

    if (target.className === 'accordion-title') {
      target.nextElementSibling.classList.toggle('open');
    }
  });
};

export default accordion;
