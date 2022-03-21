// do something!
const $nav = document.querySelector('nav');
const $toggleBtn = document.querySelector('.toggle');
const $body = document.querySelector('body');
let toggle = sessionStorage.getItem('toggle');
console.log(sessionStorage.getItem('toggle'));

$toggleBtn.addEventListener('click', (e) => toggleClick(e));

const toggleClick = (e) => {
  if (toggle) {
    $nav.classList.add('active');
    toggle = false;
    sessionStorage.setItem('toggle', false);
  } else {
    $nav.classList.remove('active');
    toggle = true;
    sessionStorage.setItem('toggle', true);
  }
};

const loaded = () => {
  $body.classList.remove('preload');
  $body.style.visibility = 'visible';
};

const init = () => {
  window.addEventListener('DOMContentLoaded',  () => {
    loaded();
  });
};
init();
