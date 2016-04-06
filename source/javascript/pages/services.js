import { forEach, switchClass } from '../helpers';
import figureInset from '../common/figure';
import insertIcons from '../common/insert-icons';
import matchHeight from '../common/match-height';

const slideOpen = function slideOpen() {
  /**
   * open more info block
   * appends to figure
   * adds open classes
   * removes close classes if any
   * @param target
   */
  function open(target) {
    const currentSection = event.target.parentElement.parentElement;
    const block = document.getElementsByClassName('more-info')[0];

    currentSection.appendChild(block);

    switchClass(target, 'close', 'open');

    setTimeout(() => {
      switchClass(block, 'close', 'open');
    }, 50);
  }

  /**
   * close more info block
   * removes open classes
   * adds close classes
   * @param target
   */
  function close(target) {
    const block = document.querySelector('.more-info.open');

    switchClass(target, 'open', 'close');
    switchClass(block, 'open', 'close');
  }

  /**
   * close more info blocks when
   * clicking outside
   */
  function closeAll(target) {
    const openElements = document.querySelectorAll('.open');
    const isMoreInfo = target.classList.contains('more-info');
    const isViewMoreParent = target.parentElement.classList.contains('more-info');

    forEach(openElements, (index, item) => {
      if (!isMoreInfo && !isViewMoreParent) switchClass(item, 'open', 'close');
    });
  }

  document.body.addEventListener('click', event => {
    const target = event.target;
    const isViewMore = target.classList.contains('view-more');
    const isOpen = target.classList.contains('open');

    if (isViewMore && !isOpen) open(target);
    if (isViewMore && isOpen) close(target);
    if (!isViewMore) closeAll(target);
  });
};

const iconic = function iconic() {
  const icons = [
    'mch-ellipses',
    'mch-heart',
    'mch-people',
    'mch-home',
  ];

  insertIcons(icons);
};

const blockHeight = function blockHeight() {
  const elementsArray = [
    ['mch-block-2', 'mch-block-1'],
    ['mch-block-4', 'mch-block-3'],
    ['mch-block-6', 'mch-block-5'],
    ['mch-block-7', 'mch-block-8', 'mch-block-9'],
  ];

  matchHeight(elementsArray);
};

figureInset.insertShadow();
figureInset.setDimensions();
figureInset.filter();

iconic();
slideOpen();
blockHeight();
