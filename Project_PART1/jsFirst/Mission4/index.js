import App from './app.js';

const $target = document.querySelector('.app');
const $input = document.querySelector('.input');
console.log($input);
new App({ $target, $input });
