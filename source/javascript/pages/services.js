import figure from '../common/figure';
import insertIcons from '../common/insert-icons';
import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';

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
    ['mch-block-2', 'mch-block-1', 'hidden-figure-info'],
    ['mch-block-4', 'mch-block-3'],
    ['mch-block-6', 'mch-block-5'],
    ['mch-block-7', 'mch-block-8', 'mch-block-9'],
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

figure.insertShadow();
figure.grayscaleSwitch();

iconic();
insetDesign();

// run last
setTimeout(() => blockHeight());
