// Todo: tidy / improve

const createModal = function createModal(responseText) {
  const data = JSON.parse(responseText);
  const modal = document.getElementsByClassName('mch-async-modal')[0];
  const img = modal.getElementsByTagName('img')[0];
  const h4 = modal.getElementsByTagName('h4')[0];
  const details = modal.getElementsByTagName('p')[0];

  img.setAttribute('src', data.image);
  img.setAttribute('alt', data.name);
  h4.innerHTML = `${data.name}<small>${data.position}</small>`;
  details.innerText = data.description;
};

const getStaffById = function getStaffById(id) {
  const http = new XMLHttpRequest();

  http.open('GET', `/about-us/our-staff/${id}`, true);
  http.setRequestHeader('Content-type', 'application/json');

  http.send(JSON.stringify(id));

  http.onreadystatechange = function responseText() {
    if (http.readyState === XMLHttpRequest.DONE) {
      createModal(http.responseText);
    }
  };
};

const getStaff = function getStaff() {
  const openers = Array.from(document.getElementsByClassName('mch-open-modal'));
  openers.filter((opener, index) => {
    opener.addEventListener('mouseup', () => getStaffById(index));

    return false;
  });
};

export default getStaff();
