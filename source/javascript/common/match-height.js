import currentBreakpoint from './current-breakpoint';
import { forEach, arrayContainsValue } from '../helpers';

/**
 * for each element, set new height
 * @param height
 * @param elementsArray
 */
const setHeights = function setHeights(height, elementsArray) {
  let element;

  elementsArray.forEach(elementInArray => {
    element = elementInArray;
    element.style.height = `${height}px`;
  });
};

/**
 * find highest element value in array
 * @param heights
 * @param elementsArray
 */
const getHighest = function getHighest(heights, elementsArray) {
  let highest = 0;

  heights.forEach((height, index) => {
    if (highest < height) highest = height;
    if (heights.length - 1 === index) setHeights(highest, elementsArray);
  });
};

/**
 * get the heights of all elements
 * @param object
 */
const matchHeight = function matchHeight(object) {
  object.elements.forEach(arrayOfClasses => {
    const last = arrayOfClasses.length - 1;
    const heights = [];
    const elementsArray = [];

    arrayOfClasses.forEach(classString => {
      const elements = document.getElementsByClassName(classString);

      forEach(elements, (index, item) => {
        const element = item;

        elementsArray.push(element);
        element.style = '';
        heights.push(element.clientHeight);

        if (classString === arrayOfClasses[last]) getHighest(heights, elementsArray);
      });
    });
  });
};

/**
 * determine which object to use based on
 * breakpoints array in object
 * @param arrayOfObjects
 */
export function breakpointCondition(arrayOfObjects) {
  const triggerMatchHeight = function triggerMatchHeight() {
    const breakpoint = currentBreakpoint();
    let containsBreakpoint;

    if (arrayOfObjects.length === 1) {
      containsBreakpoint = arrayContainsValue(breakpoint, arrayOfObjects[0].breakpoints);

      if (containsBreakpoint) matchHeight(arrayOfObjects[0]);
    } else {
      arrayOfObjects.forEach(object => {
        containsBreakpoint = arrayContainsValue(breakpoint, object.breakpoints);

        if (containsBreakpoint) matchHeight(object);
      });
    }
  };

  triggerMatchHeight();

  window.addEventListener('resize', triggerMatchHeight);
}

export default breakpointCondition;
