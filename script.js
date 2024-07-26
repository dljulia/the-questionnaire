const form = document.querySelector(".form");
const inputName = document.querySelector('#name');
const inputSecondName = document.querySelector('#secondName');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputAgree = document.querySelector('#agree');
const buttonSend = document.querySelector('#button');
const buttonClear = document.querySelector('#clear');
const container = document.querySelector('.container');

function getMessage(text, color) {
  const message = document.createElement('div');
  message.classList.add("message", color);
  message.textContent = text;
  container.append(message);

  setTimeout(() => {
    message.remove();
  }, 3000);
}

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  const name = inputName.value;
  const secondName = inputSecondName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const agree = inputAgree.checked;

  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: dljulia'
    },
    body: JSON.stringify({
      name,
      secondName,
      email,
      phone,
      agree
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then(() => {
      getMessage("Анкета успешно отправлена", "green");
    })
    .catch(() => {
      getMessage("Произошла ошибка. Попробуйте еще раз", "red");
    })
    .finally(() => {
      form.reset();
    });
});
