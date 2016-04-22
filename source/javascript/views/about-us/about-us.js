import preload from '../../common/image-preload';
import matchHeight from '../../common/match-height';
import figure from '../../common/figure';
import createInnerDiv from '../../common/create-inner-div';
import insertIcons from '../../common/insert-icons';
import slider from '../../common/slider';

const iconic = function iconic() {
  return insertIcons([
    'mch-ellipses',
  ], true);
};

const blockHeight = function blockHeight() {
  return matchHeight([
    {
      breakpoints: ['MD', 'LG', 'XL'],
      elements: [
        ['mch-block-1', 'mch-block-2', 'hidden-slider'],
      ],
    },
    {
      breakpoints: ['SM'],
      elements: [
        ['mch-block-2', 'hidden-slider'],
      ],
    },
    {
      breakpoints: ['XS'],
      elements: [
        [],
      ],
    },
  ]);
};

const insetDesign = function insetDesign() {
  return createInnerDiv([
    'mch-block-1',
  ]);
};

const sliders = function sliders() {
  return slider([
    { direction: 'right' },
  ]);
};

const preloadImages = function preloadImages() {
  return preload([
    '/assets/images/activities/activities-part.jpg',
  ]);
};

const init = function init() {
  Promise.all(preloadImages()).then(() => {
    figure.insertShadow();
    figure.grayscaleSwitch();
    iconic();
    insetDesign();
    sliders();
    blockHeight();
  });
};

init();
