// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData() {
  const nameForm = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const isChecked = document.getElementById('status').checked;

  let data = {
    name: nameForm,
    email: email,
    city: city,
    zipCode: zipCode,
    status: isChecked,
  };
  return data;
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  if (document.getElementById('status').checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(data) {
  if (data != null && isNumber(data.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  let warningBox = document.getElementById('warning');

  let data = handleGetFormData();

  if (validateFormData(data)) {
    warningBox.innerText = '';
  } else {
    warningBox.innerText = 'Periksa form anda sekali lagi';
  }

  return warningBox;
}

const btnSubmit = document.getElementById('submit-form');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});

console.log('hey');
