const bodyOverflow = function bodyOverflow() {
  const body = document.body;

  if (body.style.overflow === '') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
};

const hideModal = function hideModal(overlay) {
  TweenMax.to(overlay, 0.4, {
    zIndex: -1,
    autoAlpha: 0,
  });
};

const modalCloseStart = function modalCloseStart(overlay, modal) {
  bodyOverflow();

  TweenMax.to(modal, 0.4, {
    zIndex: -1,
    autoAlpha: 0,
    onComplete: () => hideModal(overlay),
  });
};

const displayModal = function displayModal(modal) {
  TweenMax.to(modal, 0.4, {
    zIndex: 5,
    autoAlpha: 1,
  });
};

const modalOpenStart = function modalOpenStart(overlay, modal) {
  bodyOverflow();

  TweenMax.to(overlay, 0.5, {
    zIndex: 4,
    autoAlpha: 0.8,
    onComplete: () => displayModal(modal),
  });
};

const addCloseButton = function addCloseButton(overlay, modal) {
  const icon = document.createElement('span');
  icon.classList.add('iconic');
  icon.classList.add('close-modal');
  icon.setAttribute('data-glyph', 'x');
  icon.setAttribute('aria-hidden', 'true');
  modal.appendChild(icon);
  icon.addEventListener('click', () => modalCloseStart(overlay, modal));
};

const modal = function modal() {
  const openers = Array.from(document.getElementsByClassName('mch-open-modal'));
  const modals = document.getElementsByClassName('mch-modal');
  const match = openers.length === modals.length;

  if (match) {
    const overlay = document.createElement('span');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    openers.filter((opener, index) => {
      addCloseButton(overlay, modals[index]);
      opener.classList.add(`open-modal-${index}`);
      opener.addEventListener('click', () => modalOpenStart(overlay, modals[index]));

      return false;
    });
  }
};

export default modal();
