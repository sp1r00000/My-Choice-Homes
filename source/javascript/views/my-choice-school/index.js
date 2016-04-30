import '../../common/navbar';
import '../../common/links';
import '../../common/figure';
import '../../common/modal';
import '../../common/paragraph-viewer';

import './icons';
import './inner-div';

import matchHeight from './match-height';
import preload from './preload';

export default function init() {
  Promise.all(preload).then(() => matchHeight);
}
