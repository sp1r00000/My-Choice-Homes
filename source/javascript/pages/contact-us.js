import validations from '../global/validations';

const contactForm = function contactForm() {
  const form = document.forms.contact;

  form.onsubmit = function submit(event) {
    validations.nameField(event, form.name);
  };
};

contactForm();
