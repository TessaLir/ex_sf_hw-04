const links = [];


const linkHandler = (index) => {
    document.location.href = `task${index}/index.html`;
}

document.querySelectorAll('a').forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

document.querySelectorAll('li').forEach((element, index) => {
    element.addEventListener('click', (e) => {
        linkHandler(index + 1);
    })
});