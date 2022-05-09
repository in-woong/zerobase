// do something!
const API_KEY = '551d3898eebf4c5a83e3565e18026423';
const baseURL = 'https://newsapi.org/v2/top-headlines';
let $newsList;

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

var state = { selected: '' };
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

function Nav(target, items) {
  const $nav = document.createElement('nav');
  $nav.classList.add('category-list');
  const $ul = document.createElement('ul');

  $ul.addEventListener('click', (e) => selectCategory(e));

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

function NewsList(target, category = 'all') {
  console.log(category);

  let currentPage = 0;
  const limit = 5;

  const $newsListContainer = document.createElement('div');
  $newsListContainer.classList.add('news-list-container');
  const $scrollObserver = document.createElement('div');
  $scrollObserver.classList.add('scroll-observer');
  const $imgBall = document.createElement('img');
  $imgBall.setAttribute('src', 'img/ball-triangle.svg');
  $imgBall.setAttribute('alt', 'Loading...');
  $scrollObserver.appendChild($imgBall);

  const $newsList = document.createElement('article');
  $newsList.classList.add('news-list');
  $newsListContainer.appendChild($newsList);

  target.appendChild($newsListContainer);
  target.appendChild($scrollObserver);

  const makeContent = (item) => {
    const { title, url, urlToImage, description } = item;
    const $newsItem = document.createElement('section');
    $newsItem.classList.add('news-item');
    $newsItem.innerHTML = `
  <div class="thumbnail">
  <a href="${url}" target="_blank" rel="noopener noreferrer">
    <img
      src="${urlToImage}"
      alt="thumbnail" />
  </a>
</div>
<div class="contents">
  <h2>
    <a href=${url} target="_blank" rel="noopener noreferrer">
      ​${title}
    </a>
  </h2>
  <p>
    ${description}
  </p>
</div>`;
    return $newsItem;
  };

  const getNews = async (page, pageSize = 5, category = 'all') => {
    const response = await axios.get(
      `${baseURL}?country=kr&category=${
        category === 'all' ? '' : category
      }&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    return response;
  };

  const showNews = (items) => {
    items.forEach((item) => {
      const newsItems = makeContent(item);
      $newsList.appendChild(newsItems);
    });
  };

  const loadNews = async (page, pageSize = 5, category = 'all') => {
    console.log('load');
    showLoader();
    try {
      const response = await getNews(page, pageSize, category);
      showNews(response.data.articles);
    } catch (error) {
      console.error(error.message);
    } finally {
      hideLoader();
    }
  };

  const hideLoader = () => {
    $scrollObserver.style.visibility = 'hidden';
  };
  const showLoader = () => {
    $scrollObserver.style.visibility = 'visible';
  };

  const throttle = (callback, limit = 1000) => {
    let waiting = true;
    return function () {
      if (waiting) {
        callback();
        waiting = false;
        setTimeout(() => {
          waiting = true;
        }, limit);
      }
    };
  };

  const createObserver = () => {
    console.log('createObserve');
    let observer;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    observer = new IntersectionObserver(
      throttle(() => {
        currentPage++;
        loadNews(currentPage, limit, category);
      }),
      options
    );

    observer.observe($scrollObserver);
  };
  // loadNews(currentPage, limit, category);
  setTimeout(() => createObserver(), 100);
}

const init = () => {
  new Nav($root, items);
  new NewsList($root);
};

window.addEventListener('DOMContentLoaded', async () => {
  init();
});
