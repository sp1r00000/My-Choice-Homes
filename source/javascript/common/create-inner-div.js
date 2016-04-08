import { forEach } from '../helpers';

/**
 * create inner div &
 * append element children
 * @param arrayOfClasses
 */
const createInnerDiv = function inset(arrayOfClasses) {
  arrayOfClasses.forEach(classString => {
    const elements = document.getElementsByClassName(classString);

    forEach(elements, (index, element) => {
      const children = element.childNodes;
      const div = document.createElement('div');

      while (children.length > 0) {
        if (children[0] !== div) div.appendChild(children[0]);
      }

      element.appendChild(div);
    });
  });
};

export default createInnerDiv;