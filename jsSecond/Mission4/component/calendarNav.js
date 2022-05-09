export default function CalendarNav({ $target, initialState, handleMonth }) {
  this.state = initialState;

  const $nav = document.createElement('div');
  $nav.classList.add('calendar-nav');
  $target.appendChild($nav);

  $nav.addEventListener('click', (e) => {
    if (
      e.target.tagName === 'BUTTON' &&
      e.target.classList.contains('prevBtn')
    ) {
      handleMonth('prevBtn');
    } else if (
      e.target.tagName === 'BUTTON' &&
      e.target.classList.contains('nextBtn')
    ) {
      handleMonth('nextBtn');
    }
  });

  this.render = () => {
    console.log('Nav Render');

    const { year, month, date } = this.state;
    const options = { month: 'long' };
    const engMonth = new Intl.DateTimeFormat('en-US', options).format(
      new Date(year, month, 0)
    );

    $nav.innerHTML = `
    <button class="prevBtn navBtn"><</button>
    <div class="navSpan">
        <span>${engMonth}</span>
        <span>${year}</span>
    </div>
    <button class="nextBtn navBtn">></button>
    `;
  };

  this.setState = (newData) => {
    console.log('Nav setState', newData);
    this.state = newData;
    this.render();
  };
  this.render();
}
