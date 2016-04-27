import '../../common/navbar';

import '../../common/figure';

import icons from './icons';
import innerDiv from './inner-div';
import matchHeight from './match-height';
import preload from './preload';
import slider from './slider';

export default function init() {
  icons();
  innerDiv();
  slider();

  Promise.all(preload()).then(() => matchHeight);
}
