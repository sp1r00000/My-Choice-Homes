import '../../common/navbar';
import '../../common/figure';

import icons from './icons';
import innerDiv from './inner-div';
import matchHeight from './match-height';
import paragraphViewer from './paragraph-viewer';
import preload from './preload';

export default function init() {
  icons();
  innerDiv();
  paragraphViewer();

  Promise.all(preload()).then(() => matchHeight);
}
