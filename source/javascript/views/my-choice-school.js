import preload from '../common/image-preload';
import matchHeight from '../common/match-height';
import figure from '../common/figure';
import createInnerDiv from '../common/create-inner-div';
import insertIcons from '../common/insert-icons';

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
        ['mch-block-1', 'mch-block-2'],
        ['mch-block-3', 'mch-block-4', 'mch-block-5', 'mch-block-6'],
        ['mch-block-7', 'mch-block-8'],
      ],
    },
    {
      breakpoints: ['SM'],
      elements: [
        ['mch-block-3', 'mch-block-4'],
        ['mch-block-5', 'mch-block-6'],
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
    'mch-block-3',
    'mch-block-5',
    'mch-block-7',
    'mch-block-8',
  ]);
};

const preloadImages = function preloadImages() {
  return preload([
    '/assets/images/my-choice-school/my-choice-school-part.jpg',
    '/assets/images/my-choice-school/girl-with-earphones.jpg',
    '/assets/images/my-choice-school/red-top-boy.jpg',
  ]);
};

const init = function init() {
  Promise.all(preloadImages()).then(() => {
    figure.insertShadow();
    figure.grayscaleSwitch();
    iconic();
    insetDesign();
    blockHeight();
  });
};

init();
