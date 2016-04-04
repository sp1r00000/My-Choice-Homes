import helpers from '../helpers';
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

    target.classList.remove('close');
    target.classList.add('open');
    block.classList.remove('close');
    block.classList.add('open');
  }

  /**
   * close more info block
   * removes open classes
   * adds close classes
   * @param target
   */
  function close(target) {
    const block = document.querySelector('.more-info.open');

    target.classList.remove('open');
    target.classList.add('close');
    block.classList.remove('open');
    block.classList.add('close');
  }

  /**
   * close more info blocks when
   * clicking outside
   * @param target
   */
  function closeAll(target) {
    const openElements = document.querySelectorAll('.open');
    const isMoreInfo = target.classList.contains('more-info');

    helpers.forEach(openElements, (index, item) => {
      if (!isMoreInfo) {
        item.classList.remove('open');
        item.classList.add('close');
      }
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
