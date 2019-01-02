  const form = document.querySelector('.contact-us__form');
  const inputs = form.querySelectorAll('input[type="text"]');
  const text = form.querySelector('.before-submit');
  const yourName = form.querySelector('input[name="name"]');
  const companyName = form.querySelector('input[name="company"]');
  console.log(form);

  const checkTextField = /^([А-Я]+[а-я]{4,})$/;

  form.addEventListener('submit', function(event) {
    let i, value, name, input,
      max = inputs.length,
      formNonValid = 0,
      errors = 'Неправильно заполнены:<ul>';

    let firstname = yourName.value;
    const validFirstName = checkTextField.test(firstname);
    if (validFirstName) {
      yourName.style.borderColor = '';
      formNonValid++;
    } else {
      errors += ('<li>' + yourName.name + '</li>');
      yourName.style.borderColor = 'red';
    }

    let secondname = companyName.value;
    const validSecondName = checkTextField.test(secondname);
    if (validSecondName) {
      companyName.style.borderColor = '';
      formNonValid++;
    } else {
      errors += ('<li>' + companyName.name + '</li>');
      companyName.style.borderColor = 'red';
    }

    errors += '</ul>';
    if (formNonValid < 4) {
      event.preventDefault();
      text.innerHTML = errors;
      text.style.color = 'black';
      text.style.display = 'block';
      text.style.margin = '-10px auto 20px';

    } else {
      alert('Уважаемый ' + firstname + ' ' + secondname + '. Спасибо за регистрацию.')
    }

    console.log(errors);
  });
