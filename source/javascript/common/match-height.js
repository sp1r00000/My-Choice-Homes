/**
 * set new height
 * @param height
 * @param elementsArray
 */
const setHeights = function setHeights(height, elementsArray) {
  elementsArray.forEach(item => {
    const element = item;
    element.style = '';
    element.style.height = `${height}px`;
  });
};

/**
 * find highest value in array
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
 * get elements from class names
 * in array, then push the element
 * heights into array
 * @param arrayOfArrays
 * @param xs
 */
export function matchHeight(arrayOfArrays, xs) {
  const triggerMatchHeight = function triggerMatchHeight() {
    arrayOfArrays.forEach(arrayOfClasses => {
      const last = arrayOfClasses.length - 1;
      const heights = [];
      const elementsArray = [];

      arrayOfClasses.forEach(classString => {
        const element = document.getElementsByClassName(classString)[0];
        elementsArray.push(element);

        if (xs || window.innerWidth > 768) {
          heights.push(element.clientHeight);

          if (classString === arrayOfClasses[last]) getHighest(heights, elementsArray);
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
