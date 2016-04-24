import matchHeight from '../../common/match-height';

export default matchHeight([
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
  {
    breakpoints: ['XS'],
    elements: [
      [],
    ],
  },
]);
