import '../../common/navbar';
import '../../common/links';

import matchHeight from './match-height';
import preload from './preload';

export default function init() {
  Promise.all(preload).then(() => matchHeight);
}
