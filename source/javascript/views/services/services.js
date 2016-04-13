import figure from '../../common/figure';
import insertIcons from '../../common/insert-icons';
import matchHeight from '../../common/match-height';
import createInnerDiv from '../../common/create-inner-div';
import slider from '../../common/slider';

// insert iconic icons
const iconic = function iconic() {
  return insertIcons([
    'mch-ellipses',
    'mch-heart',
    'mch-people',
    'mch-home',
  ], true);
};

// match block heights
const blockHeight = function blockHeight() {
  return matchHeight([
    {
      breakpoints: ['MD', 'LG', 'XL'],
      elements: [
        ['mch-block-1', 'mch-block-2', 'hidden-slider'],
        ['mch-block-4', 'mch-block-3'],
        ['mch-block-6', 'mch-block-5'],
        ['mch-block-7', 'mch-block-8', 'mch-block-9'],
      ],
    },
    {
      breakpoints: ['SM'],
      elements: [
        ['mch-block-2', 'hidden-slider'],
      ],
    },
  ]);
};

// insert div for inset design
const insetDesign = function insetDesign() {
  return createInnerDiv([
    'mch-block-1',
    'mch-block-3',
    'mch-block-5',
    'mch-block-7',
    'mch-block-8',
    'mch-block-9',
  ]);
};

const sliders = function sliders() {
  slider([
    { direction: 'right' },
  ]);
};

figure.insertShadow();
figure.grayscaleSwitch();

iconic();
insetDesign();
sliders();

setTimeout(() => {
  blockHeight();
}, 500);
