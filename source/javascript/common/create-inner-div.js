import { forEach } from '../helpers';

/**
 * create inner div & append element children
 * used for styling, just pass in an array of element classes
 * @param arrayOfClasses
 */
const createInnerDiv = function inset(arrayOfClasses) {
  arrayOfClasses.filter(classString => {
    const elements = document.getElementsByClassName(classString);

    return forEach(elements, (index, element) => {
      const children = element.childNodes;
      const div = document.createElement('div');

      while (children.length > 0) {
        if (children[0] !== div) div.appendChild(children[0]);
      }

      return element.appendChild(div);
    });
  });
};

export default createInnerDiv;
