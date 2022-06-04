function init() {
  const ul = document.querySelector('.header_ul');
  const contents = document.querySelector('.header_contents');

  const clickItem = (e) => {
    contents.innerText = e.target.innerText;
  };

  ul.addEventListener('click', clickItem);
}

init();
