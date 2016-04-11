import currentBreakpoint from './common/current-breakpoint';
import navbar from './common/navbar';
import touch from './common/touch';
import links from './common/links';

const breakpoint = currentBreakpoint();

navbar.createFixedNav();

if (breakpoint !== 'XL') navbar.toggleNav();

navbar.navLogo();

links();

touch.touchElement();
