// do something!
const $nav = document.querySelector('nav');
const $toggleBtn = document.querySelector('.toggle');
const $body = document.querySelector('body');

const isOpen = localStorage.getItem('sideOpen');
if (isOpen == 'false') {
  $nav.classList.remove('active');
}
$toggleBtn.addEventListener('click', (e) => toggleClick(e));

const toggleClick = (e) => {
  const isOpen = localStorage.getItem('sideOpen');

  if (isOpen == 'true') {
    $nav.classList.remove('active');
    localStorage.setItem('sideOpen', false);
  } else {
    $nav.classList.add('active');
    localStorage.setItem('sideOpen', true);
  }
};

const openToggle = () => {};

window.onload = () => {
  $body.style.visibility = 'visible';
  $body.classList.remove('preload');
};
