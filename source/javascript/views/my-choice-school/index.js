import '../../common/navbar';
import '../../common/links';
import '../../common/figure';
import '../../common/modal';
import '../../common/paragraph-viewer';

import icons from './icons';
import innerDiv from './inner-div';
import matchHeight from './match-height';
import preload from './preload';

export default function init() {
  icons();
  innerDiv();

  Promise.all(preload()).then(() => matchHeight);
}
