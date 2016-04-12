import currentBreakpoint from './common/current-breakpoint';
import buildFixedNav from './common/navbar';
import touch from './common/touch';
import links from './common/links';

buildFixedNav();

links();

touch.touchElement();
