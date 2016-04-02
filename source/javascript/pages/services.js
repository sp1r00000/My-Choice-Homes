import helpers from '../helpers';
import mchFigure from '../common/mch-figure';

mchFigure.setDimensions();
mchFigure.insertShadow();

/**
 * toggle grayscale filter
 * when element in full view
 */
const filterTransition = function filterTransition() {
  const elements = document.getElementsByClassName('mch-figure');

  function scroll() {
    helpers.forEach(elements, (index, element) => {
      const img = element.getElementsByTagName('img')[0];
      const top = element.offsetTop;
      const height = element.offsetHeight;

      if (top >= window.pageYOffset
        && (top + height) <= (window.pageYOffset + window.innerHeight)) {
        img.classList.remove('grayscale-on');
        img.classList.add('grayscale-off');
      } else {
        img.classList.remove('grayscale-off');
        img.classList.add('grayscale-on');
      }
    });
  }

  document.onscroll = scroll;
};

filterTransition();
