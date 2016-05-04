/**
 * toggle modal content
 * @param modalContent
 */
const toggleModalContent = function toggleModalContent(modalContent) {
  const tl = new TimelineLite();
  tl.add('stagger', '+=0.5');

  tl.set(modalContent, {
    scale: 0,
    opacity: 0,
  });

  tl.staggerTo(modalContent, 0.5, {
    position: 'relative',
    zIndex: 6,
    opacity: 1,
    scale: 1,
  }, 0.05, 'stagger');
};

/**
 * toggle modal
 * @param stripesContainer
 * @param modalContent
 */
const toggleStripes = function toggleStripes(modalContent, stripesContainer) {
  const stripes = stripesContainer.children;

  const tl = new TimelineLite();
  tl.add('stagger', '+=0.5');

  const animateTo = tl.staggerTo(stripes, 0.1, {
    top: 0,
    opacity: 1,
  }, 0.05, 'stagger');

  animateTo.eventCallback('onComplete', toggleModalContent, [modalContent]);
};

/**
 * @param modal
 * @param stripesContainer
 */
const modalAndContentVisibility = function modalAndContentVisibility(modal, stripesContainer) {
  const currentModal = modal;
  currentModal.style.zIndex = 5;
  currentModal.style.opacity = 1;

  const modalContents = Array.from(currentModal.children);
  const modalContent = [];

  modalContents.filter((child, index) => {
    if (child !== stripesContainer) {
      modalContent.push(child);
      modalContents[index].style.opacity = 0;
      modalContents[index].style.scale = 0;
    }

    return false;
  });

  return toggleStripes(modalContent, stripesContainer);
};

/**
 * @param modal
 */
const appendStripes = function appendStripes(modal) {
  const stripesContainer = document.getElementsByClassName('mch-modal-stripe-container')[0];
  modal.appendChild(stripesContainer);

  return modalAndContentVisibility(modal, stripesContainer);
};

/**
 * make the current modal visible
 * fade in the overlay
 * @param modal
 */
const toggleOverlay = function toggleOverlay(modal) {
  const overlay = document.getElementsByClassName('overlay')[0];
  const tl = new TimelineLite();
  tl.to(overlay, 0.1, { zIndex: 4, opacity: 0.8 });

  return appendStripes(modal);
};

/**
 * add stripes container + stripes
 * set style width for each stripe
 * set style left for each stripe
 * @param modal
 */
const addStripes = function addStripes(modal) {
  const stripeContainer = document.createElement('div');
  stripeContainer.classList.add('mch-modal-stripe-container');
  modal.appendChild(stripeContainer);

  const modalWidth = modal.clientWidth;
  const stripeWidth = modalWidth / 10;
  const numberOfStripes = Math.floor(modalWidth / stripeWidth);

  let leftPosition = 0;

  for (let i = 0, l = numberOfStripes; i < l; i++) {
    const stripe = document.createElement('span');
    stripe.classList.add('mch-modal-stripe');
    stripe.style.width = `${stripeWidth}px`;

    if (i !== 0) stripe.style.left = `${leftPosition += stripeWidth}px`;

    stripeContainer.appendChild(stripe);
  }
};

/**
 * add overlay span to document
 */
const addOverlay = function addOverlay() {
  const overlay = document.createElement('span');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
};

/**
 * check openers to modals length match
 * init addOverlay fn
 * init addStripes fn for each modal
 * add mouseup event on opener
 */
const modal = function modal() {
  const openers = Array.from(document.getElementsByClassName('mch-open-modal'));
  const modals = Array.from(document.getElementsByClassName('mch-modal'));
  const match = openers.length === modals.length;

  if (match) {
    addOverlay();
    addStripes(modals[0]);

    openers.filter((opener, index) => {
      opener.addEventListener('click', () => toggleOverlay(modals[index]));

      return false;
    });
  } else {
    console.log('openers to modals do not match');
  }
};

export default modal();
