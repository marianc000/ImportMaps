//import anime from '../node_modules/animejs/lib/anime.es.js';
import anime from 'anime';

const STRING = 'importmap';
const container = document.querySelector('.container');

for (const ch of STRING) {
  container.insertAdjacentHTML('beforeend', `<div>${ch}</div>`);
}

const targets = [...container.children];

function setAnimation(el) {
  const fontSize = anime.random(2, 5);
  anime({
    targets: el,
    fontSize: fontSize + 'em',
    duration: fontSize * 150,
    easing: 'linear',
    direction: 'alternate'
  }).finished.then(() => setAnimation(el));
}

targets.forEach(el => setAnimation(el));

