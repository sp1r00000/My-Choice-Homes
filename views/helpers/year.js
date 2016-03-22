const Handlebars = require('handlebars');

module.exports = Handlebars.registerHelper('year', () => {
  const date = new Date();
  return date.getFullYear();
});
