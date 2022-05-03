const trafficLightEl = document.querySelector('#trafficLight1');

function makeBlack() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeBlack);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeBlack);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
trafficLightEl.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeBlack);
}
trafficLightEl.addEventListener('click', makeRed);

/*
let trafficLightE = document.querySelectorAll('.trafficlights');
let i = 0;
trafficLightE.forEach (el => {
    el.addEventListener('click', makeBlack(el));
}
function makeBlack() {
    trafficLightE.style.background = ('black');
    trafficLightE.removeEventListener('click', makeBlack);
    trafficLightE.addEventListener('click', makeGreen);
}

trafficLightE.addEventListener('click', makeBlack);

function makeGreen() {
    trafficLightE.style.background = ('green');
    trafficLightE.removeEventListener('click', makeGreen);
    trafficLightE.addEventListener('click', makeYellow);
}
trafficLightE.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightE.style.background = ('yellow');
    trafficLightE.removeEventListener('click', makeYellow);
    trafficLightE.addEventListener('click', makeRed);
}
trafficLightE.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightE.style.background = ('red');
    trafficLightE.removeEventListener('click', makeRed);
    trafficLightE.addEventListener('click', makeBlack);
}
trafficLightE.addEventListener('click', makeRed);
*/