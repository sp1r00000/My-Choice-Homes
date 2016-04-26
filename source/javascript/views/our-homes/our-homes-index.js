import container from './container';
import matchHeight from './match-height';
import preload from './preload';

export default function init() {
  container();

  Promise.all(preload()).then(() => matchHeight);
}
