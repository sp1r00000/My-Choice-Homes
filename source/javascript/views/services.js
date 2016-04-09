import figure from '../common/figure';
import insertIcons from '../common/insert-icons';
import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';
import slider from '../common/slider';

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
    ['mch-block-1', 'mch-block-2', 'hidden-slider'],
    ['mch-block-4', 'mch-block-3'],
    ['mch-block-6', 'mch-block-5'],
    ['mch-block-7', 'mch-block-8', 'mch-block-9'],
  ]);
};

// insert div for inset design
const insetDesign = function insetDesign() {
  return createInnerDiv([
    'mch-block-1',
    'hidden-slider',
    'mch-block-3',
    'mch-block-5',
    'mch-block-7',
    'mch-block-8',
    'mch-block-9',
  ]);
};

const sliders = function sliders() {
  slider([
    {
      direction: 'right',
    },
  ]);
};

figure.insertShadow();
figure.grayscaleSwitch();

iconic();
insetDesign();
sliders();

// run last
setTimeout(() => blockHeight());
