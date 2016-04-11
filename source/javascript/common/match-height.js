import currentBreakpoint from './current-breakpoint';
import { forEach, arrayContainsValue } from '../helpers';

/**
 * for each element in single array, set height to highest
 * @param height
 * @param elementsArray
 */
const setHeights = function setHeights(height, elementsArray) {
  let element;

  elementsArray.filter(elementInArray => {
    element = elementInArray;
    element.style.height = `${height}px`;
    return true;
  });
};

/**
 * find highest element height in array
 * @param heights
 * @param elementsArray
 */
const getHighest = function getHighest(heights, elementsArray) {
  let highest = 0;

  heights.filter((height, index) => {
    if (highest < height) highest = height;
    if (heights.length - 1 === index) setHeights(highest, elementsArray);
    return true;
  });
};

/**
 * push heights of elements in single array to new array
 * @param arrayOfClasses
 */
const getElementsHeights = function getElementsHeights(arrayOfClasses) {
  const last = arrayOfClasses.length - 1;
  const heights = [];
  const elementsArray = [];

  return arrayOfClasses.filter(classString => {
    const elements = document.getElementsByClassName(classString);

    forEach(elements, (index, item) => {
      const element = item;

      elementsArray.push(element);
      element.style.height = '';
      heights.push(element.clientHeight);

      if (classString === arrayOfClasses[last]) getHighest(heights, elementsArray);
    });

    return true;
  });
};

/**
 * returns single arrays of classes
 * @param arrayOfArrays
 * @returns {*}
 */
const getArrayOfClasses = function getArrayOfClasses(arrayOfArrays) {
  return arrayOfArrays.filter(arrayOfClasses => getElementsHeights(arrayOfClasses));
};

/**
 * clear inline styles of elements when current
 * breakpoint doesn't match any in breakpoints array
 * @param arrayOfArrays
 */
const clearInlineStyles = function clearInlineStyles(arrayOfArrays) {
  const classNames = function classNames(elementClasses) {
    elementClasses.forEach(elementClass => {
      const element = document.getElementsByClassName(elementClass)[0];
      element.style.height = '';
    });
  };

  arrayOfArrays.filter(arrayOfClasses => classNames(arrayOfClasses));
};

/**
 * determine which object to use based on
 * breakpoints array in object
 * @param arrayOfObjects
 */
const breakpointCondition = function breakpointCondition(arrayOfObjects) {
  const breakpoint = currentBreakpoint();

  const elementsArrays = arrayOfObjects.filter(array => {
    const containsBreakpoint = arrayContainsValue(breakpoint, array.breakpoints);

    if (containsBreakpoint) return array;

    return false;
  });

  if (elementsArrays.length) {
    getArrayOfClasses(elementsArrays[0].elements);
  } else {
    clearInlineStyles(arrayOfObjects[0].elements);
  }
};

/**
 * trigger breakpoint condition & add resize event
 * @param arrayOfObjects
 */
const matchHeight = function matchHeight(arrayOfObjects) {
  const objectsArray = arrayOfObjects;

  breakpointCondition(objectsArray);
  window.addEventListener('resize', () => breakpointCondition(objectsArray));
};

export default matchHeight;
