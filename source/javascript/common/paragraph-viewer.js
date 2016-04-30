import '../../lib/TweenLite.min';

/**
 * add active class to paragraph
 * @param paragraphs
 * @param currentParagraph
 */
const activeClass = function activeClass(paragraphs, currentParagraph) {
  paragraphs.filter(p => {
    if (p.classList.contains('active')) p.classList.remove('active');

    return false;
  });

  currentParagraph.classList.add('active');
};

/**
 * calc arrow position and animate
 * @param arrow
 * @param paragraph
 */
const setPosition = function setPosition(arrow, paragraph) {
  const element = arrow;

  const paragraphMiddle = paragraph.clientHeight / 2;
  const arrowMiddle = element.clientHeight / 2;
  const padding = window.getComputedStyle(paragraph, null).getPropertyValue('padding-bottom');
  const top = paragraph.offsetTop + (paragraphMiddle - arrowMiddle - parseInt(padding, 0));

  const left = paragraph.offsetLeft - 3;

  TweenLite.to(element, 0.1, { top });
  TweenLite.to(element, 0.1, { left });
};

/**
 * mouseover event
 * @param event
 * @param paragraphs
 */
const overViewer = function overViewer(event, paragraphs) {
  if (event.target.localName === 'p') {
    activeClass(paragraphs, event.target);
    setPosition(event.target.parentElement.lastElementChild, event.target);
  }
};

/**
 * add iconic arrow icon to each viewer
 * @param viewer
 * @param paragraph
 */
const addArrows = function addArrows(viewer, paragraph) {
  const arrow = document.createElement('span');
  arrow.classList.add('iconic');
  arrow.classList.add('paragraph-arrow');
  arrow.setAttribute('data-glyph', 'caret-right');
  arrow.setAttribute('aria-hidden', 'true');

  setPosition(arrow, paragraph);

  viewer.appendChild(arrow);
};

/**
 * for each viewer on page
 * addArrows fn
 * activeClass fn to first paragraph
 * add mouse over event
 */
const paragraphViewer = function paragraphViewer() {
  const viewers = Array.from(document.getElementsByClassName('mch-paragraph-viewer'));

  viewers.filter(viewer => {
    const paragraphs = Array.from(viewer.getElementsByTagName('p'));
    addArrows(viewer, paragraphs[0]);
    activeClass(paragraphs, paragraphs[0]);
    viewer.addEventListener('mouseover', event => overViewer(event, paragraphs));

    return false;
  });
};

export default paragraphViewer();
