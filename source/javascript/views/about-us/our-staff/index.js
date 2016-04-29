import '../../../common/navbar';
import '../../../common/links';
import '../../../common/modal';

import preload from './preload';
import matchHeight from './match-height';

export default function init() {
  Promise.all(preload).then(() => matchHeight);
}
