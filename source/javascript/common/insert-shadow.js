import helpers from '../helpers';

/**
 * insert a span styled with
 * inset shadow
 */
export function insertShadow() {
  const elements = document.getElementsByClassName('mch-insert-shadow');

  helpers.forEach(elements, (index, item) => {
    const span = document.createElement('span');
    span.classList.add('img-inset-shadow');
    item.appendChild(span);
  });
}

export default { insertShadow };
