import 'https://www.google.com/recaptcha/api.js';

import '../../../common/navbar';
import '../../../common/links';

import watchField from '../../../common/validations/utils';
import validateName from '../../../common/validations/name';
import validateRecaptcha from '../../../common/validations/recaptcha';
import insertContainer from '../../../common/container';

const container = function container() {
  return insertContainer([
    'mch-block-1',
    'mch-block-2',
  ]);
};

const sendSuccess = function sendSuccess(form, response) {
  const success = form;

  success.name.value = '';
  success.comment.value = '';
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
const sendQuote = function sendMessage(form) {
  const http = new XMLHttpRequest();

  http.open(form.method, form.action, true);
  http.setRequestHeader('Content-type', 'application/json');

  const data = {
    name: form.name.value,
    comment: form.comment.value,
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
const quoteForm = function contactForm() {
  const form = document.forms.quote;
  form.action = '/about-us/quotes';
  form.method = 'POST';

  form.onsubmit = function submit(event) {
    const name = validateName(event, form.name);
    const recaptcha = validateRecaptcha(event, form['g-recaptcha-response']);

    if (name && recaptcha) sendQuote(form);
  };

  const elements = Array.from(form.elements);
  elements.filter(element => watchField(element));
};

container();
quoteForm();
