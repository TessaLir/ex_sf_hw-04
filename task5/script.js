const elementInput = document.querySelector('form > input[type="text"]'),
    elementSubmit = document.querySelector('form > input[type="submit"]'),
    elementParagraph = document.querySelector('form > p');

elementInput.addEventListener('input', (e) => {
    elementParagraph.innerText = e.currentTarget.value;
});

elementSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    elementInput.value = '';
    elementParagraph.innerText = '';
});