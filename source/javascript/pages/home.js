import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';

/**
 * match block heights
 */
const blockHeight = function blockHeight() {
  const elementsArray = [
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
  ];

  matchHeight(elementsArray, true);
};

const verticallyMiddle = function insetDesign() {
  const elementsArray = [
    'mch-block-1',
    'mch-block-2',
    'mch-block-5',
    'mch-block-6',
    'mch-block-7',
    'mch-block-10',
    'mch-block-11',
  ];

  createInnerDiv(elementsArray);
};

/**
 * toggle class for accordion
 * content
 */
const accordion = function accordion() {
  const accord = document.querySelector('.accordion');

  accord.addEventListener('click', event => {
    const target = event.target;
    const isTitle = target.className === 'accordion-title';
    const child = target.children.length === 0;

    if (isTitle) {
      target.nextElementSibling.classList.toggle('open');
    }

    if (child) {
      target.parentElement.nextElementSibling.classList.toggle('open');
    }
  });
};

verticallyMiddle();
accordion();

// run last
setTimeout(() => blockHeight());
