import preload from '../../common/image-preload';
import insertContainer from '../../common/insert-container';
import matchHeight from '../../common/match-height';

// insert container
const container = function container() {
  return insertContainer([
    'mch-block-0',
    'mch-block-1',
    'mch-block-2',
    'mch-block-3',
    'mch-block-4',
    'mch-block-5',
    'mch-block-6',
    'mch-block-7',
  ]);
};

// match block heights
const blockHeight = function blockHeight() {
  return matchHeight([
    {
      breakpoints: ['MD', 'LG'],
      elements: [
        ['mch-block-0', 'mch-block-1'],
        ['mch-block-2', 'mch-block-3'],
        ['mch-block-4', 'mch-block-5'],
        ['mch-block-6', 'mch-block-7'],
      ],
    },
    {
      breakpoints: ['XL'],
      elements: [
        ['mch-block-0', 'mch-block-1', 'mch-block-2'],
        ['mch-block-3', 'mch-block-4', 'mch-block-5'],
        ['mch-block-6', 'mch-block-7'],
      ],
    },
  ]);
};

const preloadImages = function preloadImages() {
  return preload([
    '/assets/images/our-homes/ivy-cottage.jpg',
    '/assets/images/our-homes/kestrel-house.jpg',
    '/assets/images/our-homes/kingfisher-view.jpg',
    '/assets/images/our-homes/maple-house.jpg',
    '/assets/images/our-homes/oak-house.jpg',
    '/assets/images/our-homes/ocean-pearl.jpg',
    '/assets/images/our-homes/osprey-house.jpg',
    '/assets/images/our-homes/pebble-house.jpg',
  ]);
};

const init = function init() {
  Promise.all(preloadImages()).then(() => {
    container();
    setTimeout(() => blockHeight());
  });
};

init();
