import figureInset from '../common/figure';
import insertIcons from '../common/insert-icons';
import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';

/**
 * insert iconic icons
 */
const iconic = function iconic() {
  const icons = [
    'mch-ellipses',
    'mch-heart',
    'mch-people',
    'mch-home',
  ];

  insertIcons(icons);
};

/**
 * match block heights
 */
const blockHeight = function blockHeight() {
  const elementsArray = [
    ['mch-block-2', 'mch-block-1'],
    ['mch-block-4', 'mch-block-3'],
    ['mch-block-6', 'mch-block-5'],
    ['mch-block-7', 'mch-block-8', 'mch-block-9'],
  ];

  matchHeight(elementsArray);
};

/**
 * insert div for inset design
 */
const insetDesign = function insetDesign() {
  const elementsArray = [
    'mch-block-1',
    'mch-block-3',
    'mch-block-5',
    'mch-block-7',
    'mch-block-8',
    'mch-block-9',
  ];

  createInnerDiv(elementsArray);
};

figureInset.insertShadow();
figureInset.setDimensions();
figureInset.filter();

iconic();
insetDesign();

// run last
setTimeout(() => blockHeight());
