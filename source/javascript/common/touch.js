import { forEach } from '../helpers';

/**
 * ripple from click/touch position
 */
const touchElement = function touch() {
  const elements = document.querySelectorAll('.mch-touch');

  forEach(elements, (index, item) => {
    item.addEventListener('click', event => {
      const touchX = item.offsetLeft;
      const touchY = item.offsetTop;
      const x = event.pageX - touchX;
      const y = event.pageY - touchY;
      const width = item.clientWidth;
      const height = item.clientHeight;

      const span = document.createElement('span');
      span.classList.add('mch-touch-effect');
      span.style.width = `${width}px`;
      span.style.height = `${height}px`;
      span.style.left = `${x - (width / 2)}px`;
      span.style.top = `${y - (height / 2)}px`;

      item.appendChild(span);
    });
  });
};

export default { touchElement };
