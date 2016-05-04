/**
 * animate modal content
 * @param modal
 * @param modalContent
 */
const toggleModalContent = function toggleModalContent(modal, modalContent) {
  const tl = new TimelineLite();
  tl.add('stagger', '+=0.2');

  tl.set(modalContent, {
    scale: 0,
    opacity: 0,
  });

  tl.staggerTo(modalContent, 0.2, {
    position: 'relative',
    zIndex: 6,
    autoAlpha: 1,
    scale: 1,
  }, 0.02, 'stagger');

  const currentModal = modal;
  currentModal.style.backgroundColor = '#fff';
};

/**
 * animate body parts
 * @param modal
 * @param modalContent
 * @param partsContainer
 */
const toggleModalBody = function toggleModalBody(modal, modalContent, partsContainer) {
  const parts = partsContainer.children;
  const tl = new TimelineLite();

  const animateTo = tl.to(parts, 0.3, {
    autoAlpha: 1,
    width: '50%',
    height: '50%',
  });

  animateTo.eventCallback('onComplete', toggleModalContent, [modal, modalContent]);
};

/**
 * @param modal
 * @param partsContainer
 */
const modalAndContentVisibility = function modalAndContentVisibility(modal, partsContainer) {
  const currentModal = modal;
  currentModal.style.zIndex = 5;
  currentModal.style.opacity = 1;
  currentModal.style.visibility = 'visible';

  const modalContents = Array.from(currentModal.children);
  const modalContent = [];

  modalContents.filter((child, index) => {
    if (child !== partsContainer) {
      modalContent.push(child);
      modalContents[index].style.opacity = 0;
      modalContents[index].style.scale = 0;
    }

    return false;
  });

  return toggleModalBody(modal, modalContent, partsContainer);
};

/**
 * clear inline styles
 * @param modal
 */
const clearInlineStyles = function clearInlineStyles(modal) {
  const children = Array.from(modal.children);
  const parts = Array.from(modal.getElementsByClassName('mch-modal-parts-container')[0].children);

  children.filter((item, index) => {
    children[index].style = '';

    return false;
  });

  parts.filter((item, index) => {
    parts[index].style = '';

    return false;
  });
};

/**
 * fade out modal & overlay
 * reset parts width & height
 * @param modal
 */
const closeModal = function closeModal(modal) {
  document.body.style.overflow = '';

  const currentModal = modal;
  currentModal.style.backgroundColor = '';

  const overlay = document.getElementsByClassName('overlay')[0];
  const tl = new TimelineLite();

  tl.to([overlay, modal], 0.1, {
    zIndex: -1,
    autoAlpha: 0,
    onComplete: clearInlineStyles(modal),
  });
};

/**
 * append body parts & close icon to
 * select modal
 * @param modal
 */
const appendReusable = function appendReusable(modal) {
  const partsContainer = document.getElementsByClassName('mch-modal-parts-container')[0];
  modal.appendChild(partsContainer);

  const closeButton = document.getElementsByClassName('mch-modal-close')[0];
  closeButton.addEventListener('mouseup', () => closeModal(modal));

  modal.appendChild(closeButton);

  return modalAndContentVisibility(modal, partsContainer);
};

/**
 * fade in overlay
 * @param modal
 */
const toggleOverlay = function toggleOverlay(modal) {
  document.body.style.overflow = 'hidden';

  const overlay = document.getElementsByClassName('overlay')[0];
  const tl = new TimelineLite();

  tl.to(overlay, 0.1, {
    zIndex: 4,
    autoAlpha: 0.8,
  });

  return appendReusable(modal);
};

/**
 * create & append close icon
 * @param modal
 */
const addCloseButton = function addCloseButton(modal) {
  const icon = document.createElement('span');
  icon.classList.add('iconic');
  icon.classList.add('mch-modal-close');
  icon.setAttribute('data-glyph', 'x');
  icon.setAttribute('aria-hidden', 'true');
  modal.appendChild(icon);
};

/**
 * add parts container + parts
 * add class for each part
 * @param modal
 */
const addBodyParts = function addBodyParts(modal) {
  const partsContainer = document.createElement('div');
  partsContainer.classList.add('mch-modal-parts-container');
  modal.appendChild(partsContainer);

  for (let i = 0, l = 4; i < l; i++) {
    const part = document.createElement('span');
    part.classList.add('mch-modal-part');
    part.classList.add(`mch-modal-part-${i}`);

    partsContainer.appendChild(part);
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
 * init addBodyParts fn for first modal
 * add mouseup event on opener
 */
const modal = function modal() {
  const openers = Array.from(document.getElementsByClassName('mch-open-modal'));
  const modals = Array.from(document.getElementsByClassName('mch-modal'));
  const match = openers.length === modals.length;

  if (match) {
    addOverlay();
    addBodyParts(modals[0]);
    addCloseButton(modals[0]);

    openers.filter((opener, index) => {
      opener.addEventListener('mouseup', () => toggleOverlay(modals[index]));

      return false;
    });
  } else {
    console.log('openers to modals do not match');
  }
};

export default modal();
