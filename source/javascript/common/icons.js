/**
 * create new span node & appendChild or insertBefore element
 * insertBefore (replace false): setTimeout used to make sure
 * other js is run first e.g. insertDiv
 * @param element
 * @param icon
 * @param replace
 */
const createIcon = function createIcon(element, icon, replace) {
  const elm = element;
  const span = document.createElement('span');
  span.classList.add('iconic');
  span.setAttribute('data-glyph', icon);
  span.setAttribute('aria-hidden', 'true');

  if (replace) {
    elm.innerText = '';
    elm.appendChild(span);
  } else {
    setTimeout(() => {
      elm.firstChild.insertBefore(span, elm.firstChild.firstChild);
    }, 0);
  }
};

/**
 * for each element class in the array passed, createIcon fn
 * @param arrayOfClassNames
 * @param replace
 */
export default function icons(arrayOfClassNames, replace) {
  arrayOfClassNames.filter(className => {
    const elements = Array.from(document.getElementsByClassName(className));
    const icon = className.substr(4, className.length);

    return elements.filter(element => createIcon(element, icon, replace));
  });
}
