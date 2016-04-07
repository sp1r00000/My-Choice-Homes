/**
 * create inner div &
 * append element children
 * @param arrayOfClasses
 */
const createInnerDiv = function inset(arrayOfClasses) {
  arrayOfClasses.forEach(item => {
    const element = document.getElementsByClassName(item)[0];

    const children = element.childNodes;
    const div = document.createElement('div');

    while (children.length > 0) {
      if (children[0] !== div) div.appendChild(children[0]);
    }

    element.appendChild(div);
  });
};

export default createInnerDiv;
