import { switchClass } from '../helpers';

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

export default grayscaleSwitch();
