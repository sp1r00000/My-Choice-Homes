import { forEach, switchClass } from '../helpers';

/**
 * set width/height of inset span element
 * resize event
 */
export function setDimensions() {
  const elements = document.getElementsByClassName('img-inset-shadow');

  forEach(elements, (index, item) => {
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
 * insert a span element styled with inset shadow
 */
export function insertShadow() {
  const elements = document.getElementsByClassName('mch-figure');

  forEach(elements, (index, item) => {
    const span = document.createElement('span');
    span.classList.add('img-inset-shadow');
    item.appendChild(span);

    setDimensions();
  });
}

/**
 * when element is in full view, toggle grayscale-off
 * else toggle grayscale-on
 */
const grayscaleSwitch = function grayscaleSwitch() {
  const elements = document.getElementsByClassName('mch-figure');

  forEach(elements, (index, element) => {
    const img = element.getElementsByTagName('img')[0];
    const top = element.offsetTop;
    const height = element.offsetHeight;

    if (top >= window.pageYOffset
      && (top + height) <= (window.pageYOffset + window.innerHeight)) {
      if (!img.classList.contains('grayscale-off')) {
        switchClass(img, 'grayscale-on', 'grayscale-off');
      }
    } else {
      if (!img.classList.contains('grayscale-on')) {
        switchClass(img, 'grayscale-off', 'grayscale-on');
      }
    }
  });

  window.addEventListener('scroll', grayscaleSwitch);
};

export default {
  insertShadow,
  setDimensions,
  grayscaleSwitch,
};
