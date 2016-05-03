import matchHeight from '../../common/match-height';

export default matchHeight([
  {
    breakpoints: ['MD', 'LG', 'XL'],
    elements: [
      ['mch-block-1', 'mch-block-2'],
      ['mch-block-3', 'mch-block-4'],
    ],
  },
  {
    breakpoints: ['SM'],
    elements: [
      ['mch-block-3', 'mch-block-4'],
    ],
  },
  {
    breakpoints: ['XS'],
    elements: [
      [],
    ],
  },
]);
