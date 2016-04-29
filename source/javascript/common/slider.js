import '../../lib/TweenLite.min';

import Icon from '../web-components/iconic-icon';

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

  TweenLite.to(children, 0.2, { top });
};

/**
 * animate slider & icon
 * @param slider
 * @param icon
 * @param state
 */
const animateSlider = function animateSlider(slider, icon, state) {
  if (state) {
    TweenLite.to(slider, 0.2, { width: '90%', onComplete: () => animateChildren(slider) });
    TweenLite.to(icon, 0.1, {
      left: '92%',
      rotationY: 180,
      transformOrigin: 'middle',
    });
  } else {
    TweenLite.to(slider, 0.1, { width: 0 });
    TweenLite.to(icon, 0.2, {
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

    const SliderIcon = document.registerElement('slider-icon', Icon);
    const icon = new SliderIcon;

    icon.properties = {
      class: `slider-${sliderConfig.direction}`,
      dataGlyph: `chevron-${sliderConfig.direction}`,
    };

    element.appendChild(icon);

    const slider = element.nextElementSibling;
    element.appendChild(slider);

    let state = false;

    icon.addEventListener('click', () => animateSlider(slider, icon.children[0], state = !state));

    return false;
  });
}
