import { switchClass } from '../helpers';

const toggleClasses = function toggleClasses(slider, icon) {
  if (!slider.classList.contains('open')) {

    setTimeout(() => {
      switchClass(slider, 'close', 'open');
    }, 50);

    switchClass(icon, 'close', 'open');
  } else {
    switchClass(slider, 'open', 'close');

    setTimeout(() => {
      switchClass(icon, 'open', 'close');
    }, 50);
  }
};

const appendChevron = function appendChevron(arrayOfObjects) {
  arrayOfObjects.forEach(sliderConfig => {
    const element = document.getElementsByClassName('mch-slider')[0];
    const span = document.createElement('span');
    span.classList.add('iconic');
    span.classList.add(`slider-${sliderConfig.direction}`);
    span.setAttribute('data-glyph', `chevron-${sliderConfig.direction}`);
    span.setAttribute('aria-hidden', 'true');

    element.appendChild(span);

    const slider = element.nextElementSibling;
    element.appendChild(slider);

    span.addEventListener('click', () => toggleClasses(slider, span));
  });
};

export default appendChevron;
