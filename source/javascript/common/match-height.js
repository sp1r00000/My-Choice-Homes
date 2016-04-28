import currentBreakpoint from './current-breakpoint';
import { arrayContainsValue } from '../helpers';

/**
 * set new element height on elements in array
 * @param highest
 * @param elementsArray
 */
const setElementHeights = function setElementHeights(highest, elementsArray) {
  console.log('highest', highest);
  let elm;

  elementsArray.filter(element => {
    elm = element;
    elm.style.height = `${highest}px`;

    return true;
  });
};

/**
 * get highest element then setElementHeights fn
 * @returns {*}
 * @param elementsArray
 * @param heightsArray
 */
const getHighestElement = function getHighestElement(elementsArray, heightsArray) {
  let highest = 0;

  return heightsArray.filter((height, index) => {
    if (highest < height) highest = height;
    if (heightsArray.length - 1 === index) setElementHeights(highest, elementsArray);

    return true;
  });
};

/**
 * pushes elements & heights into individual arrays
 * @param elementsArray
 * @param heightsArray
 * @param classString
 */
const createUsedArrays = function createUsedArrays(elementsArray, heightsArray, classString) {
  const elements = Array.from(document.getElementsByClassName(classString));

  elements.filter(element => {
    const elm = element;

    elm.style.height = '';
    elementsArray.push(elm);
    heightsArray.push(elm.clientHeight);

    return false;
  });
};

/**
 * createUsedArrays fn for each class string in class array
 * returns getHighestElement fn
 * @param classArray
 */
const usedClassString = function usedClassString(classArray) {
  const elementsArray = [];
  const heightsArray = [];

  classArray.filter(classString => createUsedArrays(elementsArray, heightsArray, classString));

  return getHighestElement(elementsArray, heightsArray);
};

/**
 * returns the class array for the used object
 * @returns {*}
 * @param usedObject
 */
const usedClassArray = function usedClassArray(usedObject) {
  return usedObject.elements.filter(classArray => usedClassString(classArray));
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
  Promise.all(filteredCurrent(arrayOfObjects)).then(() => filteredCurrentForResize(arrayOfObjects));
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
