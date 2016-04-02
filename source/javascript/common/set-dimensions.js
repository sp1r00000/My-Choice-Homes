import helpers from '../helpers';

/**
 * set the dimensions of elements
 * with class mch-set-dimensions
 * resize event
 */
export function setDimensions() {
  const elements = document.getElementsByClassName('mch-set-dimensions');

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

export default { setDimensions };
