// do something!
const StarRating = ($container) => {
  $container.classList.add('star-rating-container');
  const maxRating = $container.dataset.maxRating;
  for (let i = 0; i < maxRating; i++) {
    console.log('star made');
    const $star = document.createElement('i');
    $star.classList.add('bx', 'bxs-star', 'bx-md');
    $star.setAttribute('data-star', `${i + 1}`);
    $star.style = '15px';
    $container.appendChild($star);
  }
  const $stars = $container.querySelectorAll('.bxs-star');
  $stars.forEach(($star, i) => {
    $star.addEventListener('mouseover', () => mouseOver(i + 1));
    $star.addEventListener('mouseout', () => mouseOut(i + 1));
    $star.addEventListener('click', () => {
      $container.dispatchEvent(
        new CustomEvent('rating-change', { detail: `${i + 1}` })
      );
      selected(i + 1);
    });
  });

  const mouseOver = (i) => {
    $stars.forEach(($star, index) => {
      if (index < i) {
        $star.classList.add('hovered');
      }
    });
  };

  const mouseOut = (i) => {
    $stars.forEach(($star, index) => {
      if (index < i) {
        $star.classList.remove('hovered');
      }
    });
  };
  const selected = (i) => {
    $stars.forEach(($star) => {
      $star.classList.remove('selected');
    });
    $stars.forEach(($star, index) => {
      if (index < i) {
        $star.classList.add('selected');
      }
    });
  };
};
export default StarRating;
