
import emitterAbsolute from 'http://127.0.0.1:5500/moduleSpecifiers/js/shared/events/eventEmitter.js';
import emitterPathAbsolute from '/moduleSpecifiers/js/shared/events/eventEmitter.js';
import emitterRelative from '../../../../shared/events/eventEmitter.js';
import emitterRemapped from 'shared/events/eventEmitter.js';
import emitterBare from 'eventEmitter';
import emitterInexistentPath from 'a/b/c/d.js';

// jquery is loaded as a global variable in main.js
const root = $('.container');

function render(txt) {
    root.append(`<p>${txt}</p>`);
};

emitterAbsolute.addListener('SHOW', () => render('emitterAbsolute'));
emitterPathAbsolute.addListener('SHOW', () => render('emitterPathAbsolute'));
emitterRelative.addListener('SHOW', () => render('emitterRelative'));
emitterRemapped.addListener('SHOW', () => render('emitterRemapped'));
emitterBare.addListener('SHOW', () => render('emitterBare'));
emitterInexistentPath.addListener('SHOW', () => render('emitterInexistentPath'));
