// Fuck CSS for not having this option by default

let followElement = document.getElementsByClassName('tooltip');

document.addEventListener('mousemove', (e) => {
    for (let i of followElement) {
        i.style.top = `${e.clientY}px`;
        i.style.left = `${e.clientX + 20}px`;
    }
});
