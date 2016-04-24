/**
 * insert a containing div for view blocks
 * @param arrayOfClasses
 */
export default function container(arrayOfClasses) {
  const footer = document.getElementsByClassName('mch-footer')[0];
  const outerDiv = document.createElement('div');

  outerDiv.classList.add('container');

  arrayOfClasses.filter(className => {
    const innerBlock = document.getElementsByClassName(className)[0];
    return outerDiv.appendChild(innerBlock);
  });

  document.body.insertBefore(outerDiv, footer);
}
