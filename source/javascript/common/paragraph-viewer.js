import { forEach } from '../helpers';

/**
 * add active class to paragraph
 * @param paragraphs
 * @param currentParagraph
 */
const activeClass = function activeClass(paragraphs, currentParagraph) {
  forEach(paragraphs, (index, p) => {
    if (p.classList.contains('active')) p.classList.remove('active');
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

  TweenLite.to(element, 0.1, { top: top });
  TweenLite.to(element, 0.1, { left: left });
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
export default function paragraphViewer() {
  const viewers = document.getElementsByClassName('mch-paragraph-viewer');

  forEach(viewers, (index, viewer) => {
    const paragraphs = viewer.getElementsByTagName('p');
    addArrows(viewer, paragraphs[0]);
    activeClass(paragraphs, paragraphs[0]);
    viewer.addEventListener('mouseover', event => overViewer(event, paragraphs));
  });
}
