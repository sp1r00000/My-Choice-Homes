import helpers from '../helpers';

/**
 * insert a span styled with
 * inset shadow
 */
export function insertShadow() {
  const elements = document.getElementsByClassName('mch-figure');

  helpers.forEach(elements, (index, item) => {
    const span = document.createElement('span');
    span.classList.add('img-inset-shadow');
    item.appendChild(span);
  });
}

/**
 * set width/height of inset radius
 * resize event
 */
export function setDimensions() {
  const elements = document.getElementsByClassName('img-inset-shadow');

  helpers.forEach(elements, (index, item) => {
    const element = item;
    const img = element.parentElement.getElementsByTagName('img')[0];
    const width = img.clientWidth;
    const height = img.clientHeight;

    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  });

  window.addEventListener('resize', setDimensions);
}

/**
 * toggle grayscale filter
 * when element in full view
 */
const filter = function filterTransition() {
  const elements = document.getElementsByClassName('mch-figure');

  function scroll() {
    helpers.forEach(elements, (index, element) => {
      const img = element.getElementsByTagName('img')[0];
      const top = element.offsetTop;
      const height = element.offsetHeight;

      if (top >= window.pageYOffset
        && (top + height) <= (window.pageYOffset + window.innerHeight)) {
        if (!img.classList.contains('grayscale-off')) {
          img.classList.remove('grayscale-on');
          img.classList.add('grayscale-off');
        }
      } else {
        if (!img.classList.contains('grayscale-on')) {
          img.classList.remove('grayscale-off');
          img.classList.add('grayscale-on');
        }
      }
    });
  }

  scroll();

  window.addEventListener('scroll', scroll);
};

export default { insertShadow, setDimensions, filter };
