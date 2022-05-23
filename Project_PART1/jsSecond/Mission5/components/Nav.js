import NewsList from './NewsList.js';

// do something!
const get = (target) => document.querySelector(target);
const $root = get('#root');
function Nav(target, items) {
  const $nav = document.createElement('nav');
  $nav.classList.add('category-list');
  const $ul = document.createElement('ul');

  $ul.addEventListener('click', (e) => selectCategory(e));

  let state = { selected: '' };
  let proxy = new Proxy(
    { selected: 'all' },
    {
      set: function (target, prop, value, receiver) {
        for (let i = 0; i < items.length; i++) {
          if (value == items[i][1]) {
            target.selected = items[i][0];
          }
        }
        const $newsListContainer = get('.news-list-container');
        const $scrollObserver = get('.scroll-observer');
        $root.removeChild($newsListContainer);
        $root.removeChild($scrollObserver);
        new NewsList($root, target.selected);
        return true;
      },
    }
  );

  const $items = items.map((item) => {
    const $li = document.createElement('li');
    $li.classList.add('category-item');
    $li.setAttribute('id', item[0]);
    $li.innerText = item[1];
    $ul.appendChild($li);
    return $li;
  });

  $items[0].classList.add('active');
  $nav.appendChild($ul);
  target.appendChild($nav);

  const selectCategory = (event) => {
    if (event.target.tagName !== 'LI') return;
    resetSelected();
    const $li = event.target;
    proxy.selected = event.target.innerText;

    $li.classList.add('active');
  };

  const resetSelected = () => {
    $items.forEach((item) => item.classList.remove('active'));
  };
}

export default Nav;
