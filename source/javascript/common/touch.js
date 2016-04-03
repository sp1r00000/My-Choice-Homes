import helpers from '../helpers';

/**
 * ripple from click/touch
 * position
 */
const touchElement = function touch() {
  const elements = document.querySelectorAll('.mch-touch');

  helpers.forEach(elements, (index, item) => {
    item.addEventListener('click', event => {
      event.preventDefault();

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

      setTimeout(() => {
        window.location.pathname = item.pathname;
      }, 200);
    });
  });
};

export default { touchElement };