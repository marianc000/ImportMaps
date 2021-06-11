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
};

export default new EventEmitter();
