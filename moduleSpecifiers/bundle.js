import 'https://code.jquery.com/jquery-3.6.0.min.js';
import emitterAbsolute from 'http://127.0.0.1:5500/moduleSpecifiers/js/shared/events/eventEmitter.js';
import emitterPathAbsolute from '../../../../moduleSpecifiers/js/shared/events/eventEmitter.js';

class EventEmitter {
    map = {};

    emit(event, ...args) {
        this.map[event].forEach(handler => handler(...args));
    }

    addListener(event, listener) {
        if (!this.map[event]) this.map[event] = [listener];
        else this.map[event].push(listener);
    }

    removeListener(event, listener) {
        this.map[event] = this.map[event].filter(activeListener => activeListener !== listener);
        console.log(this.map);
    };
}
var emitter = new EventEmitter();

// jquery is loaded as a global variable in main.js
const root = $('.container');

function render(txt) {
    root.append(`<p>${txt}</p>`);
}
emitterAbsolute.addListener('SHOW', () => render('emitterAbsolute'));
emitterPathAbsolute.addListener('SHOW', () => render('emitterPathAbsolute'));
emitter.addListener('SHOW', () => render('emitterRelative'));
emitter.addListener('SHOW', () => render('emitterRemapped'));
emitter.addListener('SHOW', () => render('emitterBare'));
emitter.addListener('SHOW', () => render('emitterInexistentPath'));

emitter.emit('SHOW');
