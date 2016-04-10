import constants from '../constants';

/**
 * return the current breakpoint
 * @returns {*}
 */
export default function currentBreakpoint() {
  const windowWidth = window.innerWidth;
  let current;

  if (windowWidth < constants.SM) current = 'XS';
  if (windowWidth >= constants.SM) current = 'SM';
  if (windowWidth >= constants.MD) current = 'MD';
  if (windowWidth >= constants.LG) current = 'LG';
  if (windowWidth >= constants.XL) current = 'XL';

  window.addEventListener('resize', currentBreakpoint);

  return current;
}
