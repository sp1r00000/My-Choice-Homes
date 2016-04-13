import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';
import insertIcons from '../common/insert-icons';

// match block heights
const blockHeight = function blockHeight() {
  return matchHeight([
    {
      breakpoints: ['XS', 'SM', 'MD', 'LG', 'XL'],
      elements: [
        [
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
        ],
      ],
    },
  ]);
};

// insert inner divs
const insertInnerDivs = function insertInnerDivs() {
  return createInnerDiv([
    'mch-block-1',
    'mch-block-2',
    'mch-block-5',
    'mch-block-6',
    'mch-block-7',
    'mch-block-10',
    'mch-block-11',
  ]);
};

// insert iconic icons
const iconic = function iconic() {
  return insertIcons([
    'mch-easel',
    'mch-home',
  ], false);
};

// toggle class for accordion content
const accordion = function accordion() {
  const accord = document.querySelector('.mch-accordion');

  accord.addEventListener('click', event => {
    const target = event.target;
    const isTitle = target.className === 'accordion-title';
    const child = target.children.length === 0;

    if (isTitle) target.nextElementSibling.classList.toggle('open');
    if (child) target.parentElement.nextElementSibling.classList.toggle('open');
  });
};

// create inner div before inserting icons
insertInnerDivs();

iconic();
accordion();

setTimeout(() => blockHeight());
