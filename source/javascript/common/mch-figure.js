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

export default { insertShadow };


/**
 * set the dimensions of elements
 * with class mch-set-dimensions
 * resize event
 */
export function setDimensions() {
  const elements = document.getElementsByClassName('mch-figure');

  helpers.forEach(elements, (index, item) => {
    const element = item;
    const img = element.getElementsByTagName('img')[0];
    const width = img.clientWidth;
    const height = img.clientHeight;

    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  });

  window.onresize = function resize() {
    setDimensions();
  };
}

export default { insertShadow, setDimensions };
