import currentBreakpoint from './current-breakpoint';
import { forEach, arrayContainsValue } from '../helpers';

/**
 * for each element, set new height
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
 * find highest element value in array
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
 * returns array of classes
 * @param arrayOfArrays
 * @returns {*}
 */
const getArrayOfClasses = function getArrayOfClasses(arrayOfArrays) {
  return arrayOfArrays.filter(arrayOfClasses => {
    return getElementsHeights(arrayOfClasses);
  });
};

/**
 * determine which object to use based on
 * breakpoints array in object
 * @param arrayOfObjects
 */
const breakpointCondition = function breakpointCondition(arrayOfObjects) {
  const breakpoint = currentBreakpoint();
  let containsBreakpoint;

  if (arrayOfObjects.length === 1) {
    containsBreakpoint = arrayContainsValue(breakpoint, arrayOfObjects[0].breakpoints);

    if (containsBreakpoint) getArrayOfClasses(arrayOfObjects[0]);
  } else {
    const elementsArrays = arrayOfObjects.filter(matchedArray => {
      containsBreakpoint = arrayContainsValue(breakpoint, matchedArray.breakpoints);

      if (containsBreakpoint) return matchedArray;

      return false;
    });

    if (elementsArrays) getArrayOfClasses(elementsArrays[0].elements);
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
