import { forEach, switchClass } from '../helpers';
import figureInset from '../common/figure';

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
    switchClass(block, 'close', 'open');
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
   * @param target
   */
  function closeAll(target) {
    const openElements = document.querySelectorAll('.open');
    const isMoreInfo = target.classList.contains('more-info');

    forEach(openElements, (index, item) => {
      if (!isMoreInfo) switchClass(item, 'open', 'close');
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

figureInset.insertShadow();
figureInset.setDimensions();
figureInset.filter();

slideOpen();
