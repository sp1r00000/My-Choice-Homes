import insertContainer from '../../common/insert-container';
import matchHeight from '../../common/match-height';

// insert container
const container = function container() {
  insertContainer([
    'mch-block-0',
    'mch-block-1',
    'mch-block-2',
    'mch-block-3',
    'mch-block-4',
    'mch-block-5',
    'mch-block-6',
    'mch-block-7',
    'mch-block-8',
    'mch-block-9',
    'mch-block-10',
    'mch-block-11',
    'mch-block-12',
    'mch-block-13',
    'mch-block-14',
    'mch-block-15',
    'mch-block-16',
    'mch-block-17',
    'mch-block-18',
    'mch-block-19',
  ]);
};

// match block heights
const blockHeight = function blockHeight() {
  matchHeight([
    {
      breakpoints: ['XS', 'SM'],
      elements: [
        ['mch-block-0', 'mch-block-1'],
        ['mch-block-2', 'mch-block-3'],
        ['mch-block-4', 'mch-block-5'],
        ['mch-block-6', 'mch-block-7'],
        ['mch-block-8', 'mch-block-9'],
        ['mch-block-10', 'mch-block-11'],
        ['mch-block-12', 'mch-block-13'],
        ['mch-block-14', 'mch-block-15'],
        ['mch-block-16', 'mch-block-17'],
        ['mch-block-18', 'mch-block-19'],
      ],
    },
    {
      breakpoints: ['MD'],
      elements: [
        ['mch-block-0', 'mch-block-1', 'mch-block-2'],
        ['mch-block-3', 'mch-block-4', 'mch-block-5'],
        ['mch-block-6', 'mch-block-7', 'mch-block-8'],
        ['mch-block-9', 'mch-block-10', 'mch-block-11'],
        ['mch-block-12', 'mch-block-13', 'mch-block-14'],
        ['mch-block-15', 'mch-block-16', 'mch-block-17'],
        ['mch-block-18', 'mch-block-19'],
      ],
    },
    {
      breakpoints: ['LG', 'XL'],
      elements: [
        ['mch-block-0', 'mch-block-1', 'mch-block-2', 'mch-block-3'],
        ['mch-block-4', 'mch-block-5', 'mch-block-6', 'mch-block-7'],
        ['mch-block-8', 'mch-block-9', 'mch-block-10', 'mch-block-11'],
        ['mch-block-12', 'mch-block-13', 'mch-block-14', 'mch-block-15'],
        ['mch-block-16', 'mch-block-17', 'mch-block-18', 'mch-block-19'],
      ],
    },
  ]);
};

container();

// figure.insertShadow();

setTimeout(() => blockHeight());
