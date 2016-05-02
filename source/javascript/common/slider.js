/**
 * return the total height of children
 * @returns {number}
 * @param children
 */
const getInnerHeight = function getInnerHeight(children) {
  let height = 0;

  children.filter(child => {
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
  const children = Array.from(slider.children);
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

/**
 * initial toggle appends slider
 * animateSlider fn
 * @param element
 * @param icon
 * @param state
 * @param counter
 */
const toggleSlider = function toggleSlider(element, icon, state, counter) {
  let hiddenSlider;

  if (counter === 0) {
    hiddenSlider = element.nextElementSibling;
    element.appendChild(hiddenSlider);
  } else {
    hiddenSlider = element.lastChild;
  }

  animateSlider(hiddenSlider, icon, state);
};

/**
 * create slider icon
 * @param sliderConfig
 * @returns {Element}
 */
const createIcon = function createIcon(sliderConfig) {
  const icon = document.createElement('span');
  icon.classList.add('iconic');
  icon.classList.add(`slider-${sliderConfig.direction}`);
  icon.setAttribute('data-glyph', `chevron-${sliderConfig.direction}`);
  icon.setAttribute('aria-hidden', 'true');

  return icon;
};

/**
 * append created icon
 * click event / toggleSlider fn
 * @param sliderConfig
 * @param index
 */
const filteredObject = function filteredObject(sliderConfig, index) {
  const element = document.getElementsByClassName('mch-slider')[index];
  const icon = createIcon(sliderConfig);

  element.appendChild(icon);

  let state = false;
  let counter = 0;
  icon.addEventListener('click', () => toggleSlider(element, icon, state = !state, counter++));
};

/**
 * filteredObject fn for each slider config
 * @param arrayOfObjects
 */
export default function slider(arrayOfObjects) {
  arrayOfObjects.filter((sliderConfig, index) => filteredObject(sliderConfig, index));
}
