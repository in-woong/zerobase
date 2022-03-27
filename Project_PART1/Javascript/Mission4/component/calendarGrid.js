import {
  makeCalendarDate,
  makeLastCalendarDate,
  makeNextCalendarDate,
} from '../js/makeCalendar.js';

export default function CalendarGrid({ $target, initialData, handleDate }) {
  this.state = initialData;

  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const $grid = document.createElement('div');
  $grid.classList.add('calendar-grid');
  $target.appendChild($grid);

  this.render = () => {
    const { year, month, date: selectedDate, selectedMonth } = this.state;
    console.log('Grid Render', year, month);

    const lastDates = makeLastCalendarDate(year, month);
    const dates = makeCalendarDate(year, month);
    const nextDates = makeNextCalendarDate(year, month);
    const nowDate = new Date().getDate();
    const nowMonth = new Date().getMonth() + 1;

    $grid.innerHTML = `
    <ul class="grid">
        ${days.map((day) => `<li class="day">${day}</li>`).join('')}
    </ul>
    <ul class="grid">
        ${lastDates
          .map((date) => {
            if (date[1] === 0) {
              return `<li data-month=${Number(month) - 1} data-date=${
                date[0]
              }  class="date sunday elseMonth">${date[0]}</li>`;
            } else if (date[1] === 6) {
              return `<li data-month=${Number(month) - 1} data-date=${
                date[0]
              }  class="date saturday elseMonth">${date[0]}</li>`;
            } else {
              return `<li data-month=${Number(month) - 1} data-date=${
                date[0]
              }  class="date elseMonth">${date[0]}</li>`;
            }
          })
          .join('')}
        ${dates
          .map((date) => {
            if (date[1] === 0) {
              if (date[0] == nowDate && month == nowMonth) {
                return `<li data-month=${Number(month)} data-date=${
                  date[0]
                } class="date sunday today">${date[0]}</li>`;
              }
              return `<li data-month=${Number(month)} data-date=${
                date[0]
              } class="date  sunday">${date[0]}</li>`;
            } else if (date[1] === 6) {
              if (date[0] == nowDate && month == nowMonth) {
                return `<li data-month=${Number(month)} data-date=${
                  date[0]
                } class="date saturday  today">${date[0]}</li>`;
              }
              return `<li  data-month=${Number(month)} data-date=${
                date[0]
              }  class="date saturday ">${date[0]}</li>`;
            } else {
              if (date[0] == nowDate && month == nowMonth) {
                return `<li  data-month=${Number(month)} data-date=${
                  date[0]
                }  class="date today">${date[0]}</li>`;
              }
              return `<li  data-month=${Number(month)} data-date=${
                date[0]
              }  class="date">${date[0]}</li>`;
            }
          })
          .join('')}
        ${nextDates
          .map((date) => {
            if (date[1] === 0) {
              return `<li  data-month=${Number(month) + 1} data-date=${
                date[0]
              }  class="date sunday elseMonth">${date[0]}</li>`;
            } else if (date[1] === 6) {
              return `<li  data-month=${Number(month) + 1} data-date=${
                date[0]
              }  class="date saturday elseMonth">${date[0]}</li>`;
            } else {
              return `<li  data-month=${Number(month) + 1} data-date=${
                date[0]
              }  class="date elseMonth">${date[0]}</li>`;
            }
          })
          .join('')}
    </ul>
    `;
    const $dates = $target.querySelectorAll('.date');
    $dates.forEach(($date) => {
      if (
        $date.dataset.date === selectedDate &&
        $date.dataset.month == selectedMonth
      ) {
        $date.classList.add('selected');
      }
      $date.addEventListener('click', (e) => {
        const selectedDate = e.target.dataset.date;
        const selectedMonth = e.target.dataset.month;
        handleDate(selectedMonth, selectedDate);
      });
    });
  };
  this.setState = (newData) => {
    console.log('Grid setState', newData);
    this.state = newData;
    this.render();
  };
  this.render();
}
