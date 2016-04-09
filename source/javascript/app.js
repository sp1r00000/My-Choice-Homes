import navbar from './common/navbar';
import touch from './common/touch';
import links from './common/links';

navbar.createFixedNav();
navbar.toggleNav();
navbar.navLogo();

links();

touch.touchElement();
