import currentBreakpoint from './current-breakpoint';
import { arrayContainsValue } from '../helpers';

/**
 * callback containing array of heights and the
 * element it applies to
 * @param classString
 * @param heights
 * @param cb
 * @returns {*}
 */
const getHeights = function getHeights(classString, heights, cb) {
  const element = document.getElementsByClassName(classString)[0];
  heights.push(element.clientHeight);

  return cb({ heights, element });
};

/**
 * get heights into array, then set new height
 * @param classArray
 * @returns {*}
 */
const setElementHeight = function setElementHeight(classArray) {
  const heights = [];
  return classArray.filter(classString => new Promise(resolve => getHeights(
    classString, heights, resolve)).then(data => {
      const element = data.element;
      const highest = Math.max.apply(Math, data.heights.map(height => height));

      element.style.height = '';
      element.style.height = `${highest}px`;
    })
  );
};

/**
 * filters a class array for the used object
 * after promise resolved, getHighestElement fn
 * @param usedObject
 * @returns {*}
 */
const usedClassArray = function usedClassArray(usedObject) {
  return usedObject.elements.filter(classArray => setElementHeight(classArray));
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
 * @param classArray
 * @param cb
 * @returns {*}
 */
const unusedClassString = function unusedClassString(classArray, cb) {
  return classArray.filter(classString => clearInlineHeight(classString, cb));
};

/**
 * returns array of classes
 * @param object
 * @param cb
 * @returns {*}
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
 * @returns {*}
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
 * @returns {*}
 */
const filteredCurrent = function filteredCurrent(arrayOfObjects) {
  const breakpoint = currentBreakpoint();

  return arrayOfObjects.filter(object => new Promise(resolve => {
    const containsBreakpoint = arrayContainsValue(breakpoint, object.breakpoints);
    if (containsBreakpoint) filteredUnused(object, arrayOfObjects, resolve);

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
