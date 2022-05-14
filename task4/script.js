document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    const result = prompt('Введите, пожалуйста, текст который хотите вставить вместо старого текста.', 'Ваш текст');
    event.currentTarget.textContent = result;
});