


function loginAndRedirect() {
  let enteredUsername = document.getElementById('username').value;
  let enteredPassword = document.getElementById('password').value;
  

  if (enteredUsername === 'Ahmed' && enteredPassword === '12345') {
    alert('Успешный вход. Перенаправление...');
    window.location.href = 'stranica2.html'; 
  } else {
    alert('Неправильное имя пользователя или пароль.');
  }
}











