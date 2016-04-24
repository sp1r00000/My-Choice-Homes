const accordion = function accordion() {
  const accord = document.querySelector('.mch-accordion');

  accord.addEventListener('click', event => {
    const target = event.target;
    const isTitle = target.className === 'accordion-title';
    const child = target.children.length === 0;

    if (isTitle) target.nextElementSibling.classList.toggle('open');
    if (child) target.parentElement.nextElementSibling.classList.toggle('open');
  });
};

export default accordion();
