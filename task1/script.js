let counterClick = 0;

console.log('Привет, мир!');

document.querySelector('p').addEventListener('click', () => {
    console.clear();
    console.log(`Вы кликнули по параграфу ${++counterClick} раз`);
})