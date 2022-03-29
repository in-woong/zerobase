// do something!
const API_KEY = '16343e64273943aca7da7937bb5fb66f';
const baseURL = 'https://newsapi.org/v2/top-headlines';
let currentPage = 1;
// const page = 1;
const limit = 5;

let data = [];
const get = (target) => document.querySelector(target);

const $newsList = get('.news-list');
const $scrollObserver = get('.scroll-observer');

let throttleCheck;
const throttle = (callback) => {
  return function () {
    if (!throttleCheck) {
      throttleCheck = setTimeout(() => {
        callback(...arguments);
        throttleCheck = false;
      }, 500);
    }
  };
};

const getNews = async (page, pageSize = 5) => {
  try {
    return await axios.get(
      `${baseURL}?country=kr&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
  } catch (error) {
    console.error(error);
  }
};

const loadNews = async (page, pageSize = 5) => {
  console.log('load');
  showLoader();
  try {
    const response = await getNews(page, pageSize);
    showNews(response.data.articles);
  } catch (error) {
    console.error(error.message);
  } finally {
    hideLoader();
  }
};

const showNews = (items) => {
  items.forEach((item) => {
    const newsItems = makeContent(item);
    $newsList.appendChild(newsItems);
  });
};

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

const hideLoader = () => {
  $scrollObserver.style.display = 'none';
};
const showLoader = () => {
  $scrollObserver.style.display = 'block';
};

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    currentPage++;
    loadNews(currentPage, limit);
  }
};
// const options = {
//   root: null,
//   rootMargin: '90% 0px 0px 0px',
//   threshold: 0.25,
// };

const io = new IntersectionObserver(
  () => {
    currentPage++;
    loadNews(currentPage, limit);
  },
  { threshold: 0.98 }
);

const observeLastItem = () => {
  const $newsItems = document.querySelectorAll('.news-item');
  io.observe($newsItems[$newsItems.length - 1]);
};

window.addEventListener('DOMContentLoaded', async () => {
  await loadNews(currentPage, limit);
  observeLastItem();
});
