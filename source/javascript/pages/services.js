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

  window.addEventListener('scroll', scroll);
};

/**
 * keep custom blocks responsive
 * with resize event
 */
const insetBlockWidth = function insetBlockWidth() {
  const elements = document.getElementsByClassName('mch-col ');

  function setWidth() {
    const windowWidth = window.innerWidth;

    helpers.forEach(elements, (index, item) => {
      const element = item;

      if (windowWidth >= 768) {
        let space = window.getComputedStyle(element, null).getPropertyValue('padding-left');
        space = parseInt(space, 0);

        element.style.maxWidth = `${windowWidth / 3 - space}px`;
        element.style.flex = `0 0 ${windowWidth / 3 - space}px`;
      } else {
        element.style.maxWidth = '100%';
        element.style.flex = '0 0 100%';
      }
    });
  }

  setWidth();

  window.addEventListener('resize', setWidth);
};

filterTransition();
insetBlockWidth();
