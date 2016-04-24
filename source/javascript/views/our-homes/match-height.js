import matchHeight from '../../common/match-height';

export default matchHeight([
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
