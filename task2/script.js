const elementConsoleLog = document.querySelector('#consoleLog'),
    elementAlert = document.querySelector('#alert'),
    elementPrompt = document.querySelector('#prompt'),
    elementFirstCode = document.querySelectorAll('code');

elementConsoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль.');
});

elementAlert.addEventListener('click', () => {
    alert('Метод для вывода модального окна с сообщением.');
});

elementPrompt.addEventListener('click', () => {
    alert('Метод для вывода модального окна с возможностью вернуть сообщение от пользователя.');
});

elementFirstCode[0].innerText = `console.log('Текст для вывода в консоль');`;
elementFirstCode[1].innerText = `alert('Текст для передачи его в модальное окно')`;
elementFirstCode[2].innerText = `const result = prompt('Текст для передачи его в модальное окно', 'Текст в инпуте')`;