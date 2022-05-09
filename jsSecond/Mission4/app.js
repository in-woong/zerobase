import CalendarNav from './component/calendarNav.js';
import CalendarGrid from './component/calendarGrid.js';

export default function App({ $target, $input }) {
  const $calendar = document.createElement('div');
  $calendar.classList.add('calendar-form');
  $target.appendChild($calendar);

  $input.addEventListener('click', () => {
    handleActive();
  });

  this.state = {
    year: new Date().getFullYear(),
    month:
      new Date().getMonth() + 1 < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1,
    date:
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate(),
    selectedMonth: undefined,
  };

  const handleActive = () => {
    if ($calendar.classList.contains('active')) {
      $calendar.classList.remove('active');
    } else {
      $calendar.classList.add('active');
    }
  };
  const handleMonth = (btn) => {
    let { year, month, date } = this.state;
    if (btn === 'prevBtn') {
      if (month === 0) {
        year--;
        month = 11;
      }
      month--;
    } else {
      if (month == 11) {
        year++;
        month = 0;
      }
      month++;
    }
    this.setState({ ...this.state, year, month, date });
  };
  const handleDate = (selectedMonth, selectedDate) => {
    let { year, month, date } = this.state;
    this.setState({
      year,
      month: selectedMonth,
      date: selectedDate,
      selectedMonth,
    });
    $input.value = `${year}-${selectedMonth}-${selectedDate}`;
    handleActive();
  };

  this.render = () => {
    console.log('App Render');
    this.nav = new CalendarNav({
      $target: $calendar,
      initialState: this.state,
      handleMonth,
    });
    this.calendar = new CalendarGrid({
      $target: $calendar,
      initialData: this.state,
      handleDate,
    });
  };

  this.setState = (newData) => {
    console.log('App setState');
    this.state = newData;
    this.nav.setState(newData);
    this.calendar.setState(newData);
  };
  this.render();
}
