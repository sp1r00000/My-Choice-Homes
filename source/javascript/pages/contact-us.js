import validations from '../global/validations';
import helpers from '../helpers';

const contactForm = function contactForm() {
  const form = document.forms.contact;

  form.onsubmit = function submit(event) {
    validations.nameField(event, form.name);
  };

  helpers.forEach(form.elements, (index, item) => {
    validations.watchField(item);
  });
};

contactForm();
