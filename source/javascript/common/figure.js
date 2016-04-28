import { switchClass } from '../helpers';

/**
 * set width/height of inset span element
 * resize event
 */
const setDimensions = function setDimensions() {
  const elements = Array.from(document.getElementsByClassName('img-inset-shadow'));

  elements.filter(element => {
    const elm = element;
    const img = element.parentElement.getElementsByTagName('img')[0];
    const width = img.clientWidth;
    const height = img.clientHeight;

    elm.style.width = `${width}px`;
    elm.style.height = `${height}px`;

    return false;
  });

  window.addEventListener('resize', setDimensions);
};

/**
 * insert a span element styled with inset shadow
 */
const insertShadow = function insertShadow() {
  const elements = Array.from(document.getElementsByClassName('mch-figure'));

  elements.filter(element => {
    const span = document.createElement('span');
    span.classList.add('img-inset-shadow');
    element.appendChild(span);

    return setDimensions();
  });
};

/**
 * when element is in full view, toggle grayscale-off
 * else toggle grayscale-on
 */
const grayscaleSwitch = function grayscaleSwitch() {
  const elements = Array.from(document.getElementsByClassName('mch-figure'));

  elements.filter(element => {
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

    return false;
  });

  window.addEventListener('scroll', grayscaleSwitch);
};

export default insertShadow();
export default grayscaleSwitch();
