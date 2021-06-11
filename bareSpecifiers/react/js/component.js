const container = document.querySelector('.container');

export default (msg) =>
    ReactDOM.render(
        React.createElement("h1", null, msg), container);