import helpers from '../helpers';
import validations from '../global/validations';

const contactForm = function contactForm() {
  const form = document.forms.contact;

  form.onsubmit = function submit(event) {
    validations.nameField(event, form.name);
    validations.emailField(event, form.email);
  };

  helpers.forEach(form.elements, (index, item) => {
    validations.watchField(item);
  });
};

contactForm();
