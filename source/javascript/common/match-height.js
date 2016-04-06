import { forEach } from '../helpers';

/**
 * set new height
 * @param element
 * @param height
 */
const setHeights = function setHeights(element, height) {
  const elm = element;
  if (elm.clientHeight !== height) elm.style.height = `${height}px`;
};

/**
 * find highest value in array
 * @param element
 * @param heights
 */
const getHighest = function getHighest(element, heights) {
  const highest = 0;

  for (let i = 0; i <= highest; i++) {
    if (heights[i] > highest) setHeights(element, heights[i]);
  }
};

/**
 * get elements from class names
 * in array, then push the element
 * heights into array
 * @param arrayOfArrays
 */
export function matchHeight(arrayOfArrays) {
  function start() {
    arrayOfArrays.forEach(arrayOfClasses => {
      const heights = [];

      forEach(arrayOfClasses, (index, classString) => {
        const element = document.getElementsByClassName(classString)[0];

        if (window.innerWidth > 768) {
          heights.push(element.clientHeight);
          getHighest(element, heights);
        } else {
          element.style = '';
        }
      });
    });
  }

  start();

  window.addEventListener('resize', start);
}

export default matchHeight;
