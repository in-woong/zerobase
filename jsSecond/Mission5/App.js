import Nav from './components/Nav.js';
import NewsList from './components/NewsList.js';

// do something!
// const page = 1;

const items = [
  ['all', '전체보기'],
  ['business', '비즈니스'],
  ['entertainment', '엔터테인먼트'],
  ['health', '건강'],
  ['science', '과학'],
  ['sports', '스포츠'],
  ['technology', '기술'],
];
const get = (target) => document.querySelector(target);
const $root = get('#root');

const init = () => {
  new Nav($root, items);
  new NewsList($root);
};

window.addEventListener('DOMContentLoaded', () => {
  init();
});
