import helpers from '../helpers';
import validations from '../common/validations';

const sendSuccess = function sendSuccess(form) {
  const success = form;

  success.name.value = '';
  success.email.value = '';
  success.telephone.value = '';
  success.message.value = '';
};

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
    recaptcha: form['g-recaptcha-response'].value,
  };

  http.send(JSON.stringify(data));

  sendSuccess(form);
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
    const name = validations.nameField(event, form.name);
    const email = validations.emailField(event, form.email);
    const recaptcha = validations.recaptcha(event, form['g-recaptcha-response']);

    if (name && email && recaptcha) sendMessage(form);
  };

  helpers.forEach(form.elements, (index, item) => {
    validations.watchField(item);
  });
};

contactForm();
