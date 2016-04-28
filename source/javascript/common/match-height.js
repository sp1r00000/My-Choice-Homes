import currentBreakpoint from './current-breakpoint';
import { arrayContainsValue } from '../helpers';

/**
 * set new element height on elements in array
 * @param highest
 * @param elements
 */
const setElementHeights = function setElementHeights(highest, elements) {
  let elm;

  elements.filter(element => {
    elm = element;
    elm.style.height = `${highest}px`;

    return true;
  });
};

/**
 * returns the highest value in array
 * @param elements
 * @param heights
 * @returns {*}
 */
const getHighestElement = function getHighestElement(elements, heights) {
  let highest = 0;

  return heights.filter((height, index) => {
    if (highest < height) highest = height;
    if (heights.length - 1 === index) setElementHeights(highest, elements);

    return true;
  });
};

/**
 * returns all element heights from class array
 * @param classArray
 */
const elementHeights = function elementHeights(classArray) {
  const elementsArray = [];
  const heightsArray = [];

  classArray.filter(classString => {
    const elements = Array.from(document.getElementsByClassName(classString));

    elements.filter(element => {
      const elm = element;

      elm.style.height = '';
      elementsArray.push(elm);
      heightsArray.push(elm.clientHeight);

      return false;
    });

    return false;
  });

  return getHighestElement(elementsArray, heightsArray);
};

/**
 * returns the class array for the used object
 * @param current
 * @returns {*}
 */
const usedClassArray = function usedClassArray(current) {
  return current.elements.filter(classArray => elementHeights(classArray));
};

/**
 * clear the inline height of all unused elements
 * callback for promise
 * @param classString
 * @param cb
 */
const clearInlineHeight = function clearInlineHeight(classString, cb) {
  const element = document.getElementsByClassName(classString)[0];
  element.style.height = '';

  cb();
};

/**
 * returns unused class strings
 * @returns {Array}
 * @param classArray
 * @param cb
 */
const unusedClassString = function unusedClassString(classArray, cb) {
  return classArray.filter(classString => clearInlineHeight(classString, cb));
};

/**
 * returns array of classes
 * @param object
 * @param cb
 */
const unusedClassArray = function unusedClassArray(object, cb) {
  return object.elements.filter(classArray => unusedClassString(classArray, cb));
};

/**
 * returns an unused object
 * @param unusedObjects
 * @param cb
 * @returns {*}
 */
const unusedObject = function unusedObject(unusedObjects, cb) {
  return unusedObjects.filter(object => unusedClassArray(object, cb));
};

/**
 * returns an array of unused object('s)
 * @param usedObject
 * @param arrayOfObjects
 * @param cb
 */
const filteredUnused = function filteredUnused(usedObject, arrayOfObjects, cb) {
  const unusedObjects = arrayOfObjects.filter(object => {
    if (object !== usedObject[0]) return object;

    return false;
  });

  return unusedObject(unusedObjects, cb);
};

/**
 * filter objects array to contain object for resize
 * create promise
 * @param arrayOfObjects
 */
const filteredCurrent = function filteredCurrent(arrayOfObjects) {
  const breakpoint = currentBreakpoint();

  return arrayOfObjects.filter(object => new Promise(resolve => {
    const containsBreakpoint = arrayContainsValue(breakpoint, object.breakpoints);
    if (containsBreakpoint) return filteredUnused(object, arrayOfObjects, resolve);

    return false;
  }));
};

/**
 * filter objects array to contain current object for resize
 * @param arrayOfObjects
 * @returns {*}
 */
const filteredCurrentForResize = function filteredCurrentForResize(arrayOfObjects) {
  const breakpoint = currentBreakpoint();

  return arrayOfObjects.filter(object => {
    const containsBreakpoint = arrayContainsValue(breakpoint, object.breakpoints);
    if (containsBreakpoint) return usedClassArray(object);

    return false;
  });
};

/**
 * after removing inline heights for unused elements
 * begin the process for resizing current elements
 * @param arrayOfObjects
 */
const beginHeightReset = function beginHeightReset(arrayOfObjects) {
  Promise.all(filteredCurrent(arrayOfObjects)).then(() => {
    filteredCurrentForResize(arrayOfObjects);
  });
};

/**
 * init filteredCurrentForResize
 * add resize event
 * @param arrayOfObjects
 */
const matchHeight = function matchHeight(arrayOfObjects) {
  filteredCurrentForResize(arrayOfObjects);

  window.addEventListener('resize', () => beginHeightReset(arrayOfObjects));
};

export default matchHeight;
