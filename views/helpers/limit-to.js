'use strict';

const Handlebars = require('handlebars');

/**
 * limit content to whole word
 * eg. {{limitTo content 100}}
 */
module.exports = Handlebars.registerHelper('limitTo', (content, limit) => {
  let string = content.substr(0, limit);
  string = string.substr(0, Math.min(string.length, string.lastIndexOf(' ')));

  const last = string.substr(string.length - 1);
  if (last === ',') string = string.slice(limit.length, -1);

  string = `${string}...`;

  return new Handlebars.SafeString(string);
});
