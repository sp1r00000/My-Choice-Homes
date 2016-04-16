import preload from '../../common/image-preload';
import matchHeight from '../../common/match-height';
import modal from '../../common/modal';

// match block heights
const blockHeight = function blockHeight() {
  return matchHeight([
    {
      breakpoints: ['XS'],
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
      breakpoints: ['SM'],
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
      breakpoints: ['MD', 'LG'],
      elements: [
        ['mch-block-0', 'mch-block-1', 'mch-block-2', 'mch-block-3'],
        ['mch-block-4', 'mch-block-5', 'mch-block-6', 'mch-block-7'],
        ['mch-block-8', 'mch-block-9', 'mch-block-10', 'mch-block-11'],
        ['mch-block-12', 'mch-block-13', 'mch-block-14', 'mch-block-15'],
        ['mch-block-16', 'mch-block-17', 'mch-block-18', 'mch-block-19'],
      ],
    },
    {
      breakpoints: ['XL'],
      elements: [
        ['mch-block-0', 'mch-block-1', 'mch-block-2', 'mch-block-3', 'mch-block-4'],
        ['mch-block-5', 'mch-block-6', 'mch-block-7', 'mch-block-8', 'mch-block-9'],
        ['mch-block-10', 'mch-block-11', 'mch-block-12', 'mch-block-13', 'mch-block-14'],
        ['mch-block-15', 'mch-block-16', 'mch-block-17', 'mch-block-18', 'mch-block-19'],
      ],
    },
  ]);
};

const preloadImages = function preloadImages() {
  return preload([
    '/assets/images/about-us/our-staff/alex-hyland.jpg',
    '/assets/images/about-us/our-staff/peter-kazmarski.jpg',
    '/assets/images/about-us/our-staff/dawn-ives.jpg',
    '/assets/images/about-us/our-staff/lisa-lawrence.jpg',
    '/assets/images/about-us/our-staff/debbie-woodgate.jpg',
    '/assets/images/about-us/our-staff/annie-murphy.jpg',
    '/assets/images/about-us/our-staff/peter-kazmarski.jpg',
    '/assets/images/about-us/our-staff/jackie-dvaz.jpg',
    '/assets/images/about-us/our-staff/georgina-colgate.jpg',
    '/assets/images/about-us/our-staff/steve-williams.jpg',
    '/assets/images/about-us/our-staff/mark-kazmarski.jpg',
    '/assets/images/about-us/our-staff/darren-widdows.jpg',
    '/assets/images/about-us/our-staff/ken-bedwell.jpg',
    '/assets/images/about-us/our-staff/theo-barclay.jpg',
    '/assets/images/about-us/our-staff/ed-glaves.jpg',
    '/assets/images/about-us/our-staff/eerik-sjostedt.jpg',
    '/assets/images/about-us/our-staff/declan-lola.jpg',
    '/assets/images/about-us/our-staff/lorna-roberts.jpg',
    '/assets/images/about-us/our-staff/michelle-allen.jpg',
    '/assets/images/about-us/our-staff/lyn-henwood.jpg',
  ]);
};

const init = function init() {
  Promise.all(preloadImages()).then(() => {
    modal();
    blockHeight();
  });
};

init();
