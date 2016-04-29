import '../../common/navbar';

import watchField from '../../common/validations/utils';
import validateName from '../../common/validations/name';
import validateEmail from '../../common/validations/email';
import validateRecaptcha from '../../common/validations/recaptcha';
import insertContainer from '../../common/container';

const container = function container() {
  return insertContainer([
    'mch-block-1',
    'mch-block-2',
  ]);
};

const sendSuccess = function sendSuccess(form, response) {
  const success = form;

  success.name.value = '';
  success.email.value = '';
  success.telephone.value = '';
  success.message.value = '';
  success.lastElementChild.classList.add('disabled');
  success.lastElementChild.disabled = true;

  const span = document.createElement('p');
  span.innerText = response;
  form.appendChild(span);
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

  http.onreadystatechange = function responseText() {
    if (http.readyState === XMLHttpRequest.DONE) {
      sendSuccess(form, http.responseText);
    }
  };
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
    const name = validateName(event, form.name);
    const email = validateEmail(event, form.email);
    const recaptcha = validateRecaptcha(event, form['g-recaptcha-response']);

    if (name && email && recaptcha) sendMessage(form);
  };

  const elements = Array.from(form.elements);
  elements.filter(element => watchField(element));
};

container();
contactForm();
