/**
 * insert a containing div for view blocks
 * @param arrayOfClasses
 */
const insertContainer = function insertContainer(arrayOfClasses) {
  const footer = document.getElementsByClassName('mch-footer')[0];

  const container = document.createElement('div');
  container.classList.add('container');

  arrayOfClasses.filter(className => {
    const innerBlock = document.getElementsByClassName(className)[0];
    return container.appendChild(innerBlock);
  });

  document.body.insertBefore(container, footer);
};

export default insertContainer;
