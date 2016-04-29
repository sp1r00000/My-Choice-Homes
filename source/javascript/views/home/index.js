import '../../common/navbar';

import './accordion';
import './icons';
import './inner-div';

import matchHeight from './match-height';
import preload from './preload';

export default function init() {
  Promise.all(preload).then(() => matchHeight);
}
