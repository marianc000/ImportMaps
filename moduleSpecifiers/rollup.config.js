import plugin from 'importmap-rollup-plugin';

export default {
    input: './js/main.js',
    output: [{
        file: 'bundle.js',
        format: 'esm'
    }],
    plugins: [
        plugin({
            "imports": {
                "shared/events/": "./js/shared/events/",
                "eventEmitter": "./js/shared/events/eventEmitter.js",
                "a/b/c/d.js":"./js/shared/events/eventEmitter.js"
            }
        })
    ]
};