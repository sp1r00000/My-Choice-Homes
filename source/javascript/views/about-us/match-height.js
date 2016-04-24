import matchHeight from '../../common/match-height';

export default matchHeight([
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
