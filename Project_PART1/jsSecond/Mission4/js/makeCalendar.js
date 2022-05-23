export function makeCalendarDate(year, month) {
  const monthEndDate = new Date(year, month, 0).getDate();
  let startDay = new Date(year, month - 1, 1).getDay();

  let date = [];

  for (let i = 1; i <= monthEndDate; i++) {
    date.push([i, startDay++ % 7]);
  }
  return date;
}

export function makeNextCalendarDate(year, month) {
  const endDay = new Date(year, month, 0).getDay();

  let date = [];
  let j = 1;

  for (let i = endDay + 1; i <= 6; i++) {
    date.push([j++, i]);
  }
  return date;
}

export function makeLastCalendarDate(year, month) {
  const lastMonthEndDate = new Date(year, month - 1, 0).getDate();
  const startDay = new Date(year, month - 1, 1).getDay();

  let date = [];

  for (let i = 0; i < startDay; i++) {
    date.push([lastMonthEndDate - startDay + i + 1, i]);
  }
  return date;
}
