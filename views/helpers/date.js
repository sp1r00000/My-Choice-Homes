const Handlebars = require('handlebars');

module.exports = Handlebars.registerHelper('year', () => {
  return new Date().getFullYear();
});
