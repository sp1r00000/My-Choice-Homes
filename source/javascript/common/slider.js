/**
 * animate slider & icon
 * @param slider
 * @param icon
 * @param state
 */
const animateSlider = function toggleClasses(slider, icon, state) {
  if (state) {
    TweenMax.to(slider, 0.2, { width: '90%' });
    TweenMax.to(icon, 0.1, {
      left: '92%',
      rotationY: 180,
      transformOrigin: 'middle',
    });
  } else {
    TweenMax.to(slider, 0.1, { width: 0 });
    TweenMax.to(icon, 0.2, {
      left: '1%',
      rotationY: 0,
      transformOrigin: 'middle',
    });
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

    let state = false;

    span.addEventListener('click', () => animateSlider(slider, span, state = !state));
  });
};

export default appendChevron;
