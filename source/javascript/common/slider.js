/**
 * return the total height of children
 * @param children
 * @returns {number}
 */
const getInnerHeight = function getInnerHeight(children) {
  let height = 0;
  const array = Array.from(children);

  array.filter(child => {
    height = height + child.clientHeight;

    return false;
  });

  return height;
};

/**
 * animate children into middle
 * @param slider
 */
const animateChildren = function animateChildren(slider) {
  const children = slider.children;
  const outerHeight = slider.clientHeight / 2;
  const innerHeight = getInnerHeight(children) / 2;
  const top = outerHeight - innerHeight;

  TweenMax.to(children, 0.2, { top: top });
};

/**
 * animate slider & icon
 * @param slider
 * @param icon
 * @param state
 */
const animateSlider = function animateSlider(slider, icon, state) {
  if (state) {
    TweenMax.to(slider, 0.2, { width: '90%', onComplete: () => animateChildren(slider) });
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

  window.addEventListener('resize', () => animateChildren(slider));
};

export default function appendChevron(arrayOfObjects) {
  arrayOfObjects.filter(sliderConfig => {
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

    return false;
  });
}
