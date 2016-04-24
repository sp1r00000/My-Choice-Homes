import preload from '../common/image-preload';
import matchHeight from '../common/match-height';
import createInnerDiv from '../common/create-inner-div';
import insertIcons from '../common/insert-icons';

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

const iconic = function iconic() {
  return insertIcons([
    'mch-easel',
    'mch-home',
  ], false);
};

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

const preloadImages = function preloadImages() {
  return preload([
    '/assets/images/home/about-us.jpg',
    '/assets/images/home/support.jpg',
    '/assets/images/home/key-working.jpg',
    '/assets/images/home/activities.jpg',
    '/assets/images/home/my-choice-school.jpg',
    '/assets/images/home/ocean-pearl.jpg',
    '/assets/images/home/kestrel-house.jpg',
    '/assets/images/home/kingfisher-view.jpg',
    '/assets/images/home/ivy-cottage.jpg',
    '/assets/images/home/osprey-house.jpg',
  ]);
};

const init = function init() {
  Promise.all(preloadImages()).then(() => {
    insertInnerDivs();
    iconic();
    accordion();

    setTimeout(() => blockHeight(), 0);
  });
};

init();
