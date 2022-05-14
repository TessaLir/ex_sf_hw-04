// зададим базовые цвета.
const colors = ['green','yellow','red'];

// Получим элемент Body
const elementRoot = document.querySelector('body');

// Сотрем текущий контент в Body.
elementRoot.innerHTML = '';

// По приколу, создадим три дива.
// Каждый див по умолчанию отображается как круд с черной заливкой.
for (let i = 0; i < 3; i++) {
    elementRoot.append(document.createElement('div'));
}

// Получим все доступные дивы на странице.
const circles = document.querySelectorAll('div');

// Метод который меняет цвет окружностей, по индексу.
const changeColor = (colorIndex) => {
    circles.forEach((element, index) => {
        element.style.backgroundColor = index !== colorIndex ? 'black' : colors[colorIndex];
    });
};

circles.forEach((element, index) => {
    element.addEventListener('click', () => { changeColor(index) });
});





// // Решение задачи по учебнику.
// const trafficLightEl = document.querySelector('div');

// const makeGreen = () => {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow); 
// }

// const makeYellow = () => {
//     trafficLightEl.style.background = ('yellow');
//     trafficLightEl.removeEventListener('click', makeYellow);
//     trafficLightEl.addEventListener('click', makeRed); 
// }

// const makeRed = () => {
//     trafficLightEl.style.background = ('red');
//     trafficLightEl.removeEventListener('click', makeRed);
//     trafficLightEl.addEventListener('click', makeGreen); 
// }

// trafficLightEl.addEventListener('click', makeGreen);