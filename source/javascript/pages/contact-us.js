import helpers from '../helpers';
import validations from '../global/validations';

/**
 * async post request
 * @param form
 */
const sendMessage = function sendMessage(form) {
  const http = new XMLHttpRequest();

  http.open(form.method, form.action, true);
  http.setRequestHeader('Content-type', 'application/json');

  const data = {
    name: form.name.value,
    email: form.email.value,
    telephone: form.telephone.value || 'n/a',
    message: form.message.value || 'User did not write a message.',
  };

  http.send(JSON.stringify(data));
};

/**
 * validate form
 * then sendMessage fn
 */
const contactForm = function contactForm() {
  const form = document.forms.contact;
  form.action = '/contact-us';
  form.method = 'POST';

  form.onsubmit = function submit(event) {
    const e = event;

    /**
     * determine validity
     * @type {boolean}
     */
    e.valid = false;

    validations.nameField(e, form.name);
    validations.emailField(e, form.email);

    if (e.valid) sendMessage(form);
  };

  helpers.forEach(form.elements, (index, item) => {
    validations.watchField(item);
  });
};

contactForm();
