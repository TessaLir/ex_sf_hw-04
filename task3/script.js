const colors = ['green','yellow','red'];
let currentColorNumber = 2;

const circle = document.querySelector('div');

const changeColor = () => {
    if (currentColorNumber === 2) {
        currentColorNumber = 0;
    } else {
        currentColorNumber++;
    }
    circle.style.backgroundColor = colors[currentColorNumber];
};

circle.addEventListener('click', changeColor);


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