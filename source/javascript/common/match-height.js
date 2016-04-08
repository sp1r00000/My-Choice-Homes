import {forEach} from '../helpers';

/**
 * set new height
 * @param height
 * @param arrayOfClasses
 */
const setHeights = function setHeights(height, arrayOfClasses) {
  forEach(arrayOfClasses, (index, classString) => {
    const element = document.getElementsByClassName(classString)[0];
    element.style.height = `${height}px`;
  });
};

/**
 * find highest value in array
 * @param heights
 * @param arrayOfClasses
 */
const getHighest = function getHighest(heights, arrayOfClasses) {
  let highest = 0;

  heights.forEach((height, index) => {
    if (highest < height) highest = height;
    if (heights.length - 1 === index) setHeights(highest, arrayOfClasses);
  });
};

/**
 * get elements from class names
 * in array, then push the element
 * heights into array
 * @param arrayOfArrays
 * @param xs
 */
export function matchHeight(arrayOfArrays, xs) {
  const triggerMatchHeight = function triggerMatchHeight() {
    arrayOfArrays.forEach(arrayOfClasses => {
      const last = arrayOfClasses.length;
      const heights = [];

      forEach(arrayOfClasses, (index, classString) => {
        const element = document.getElementsByClassName(classString)[0];

        if (xs || window.innerWidth > 768) {
          heights.push(element.clientHeight);

          if (classString === arrayOfClasses[last - 1]) getHighest(heights, arrayOfClasses);
        } else {
          element.style = '';
        }
      });
    });
  };

  triggerMatchHeight();

  window.addEventListener('resize', triggerMatchHeight);
}

export default matchHeight;
