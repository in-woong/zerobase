const AnalogClock = ($container) => {
  // do something!

  const makeClock = () => {
    const $time1 = document.createElement('div');
    const $time2 = document.createElement('div');
    const $time3 = document.createElement('div');
    const $time4 = document.createElement('div');
    const $time5 = document.createElement('div');
    const $time6 = document.createElement('div');
    const $time7 = document.createElement('div');
    const $time8 = document.createElement('div');
    const $time9 = document.createElement('div');
    const $time10 = document.createElement('div');
    const $time11 = document.createElement('div');
    const $time12 = document.createElement('div');

    $time1.classList.add('time', 'time1');
    $time2.classList.add('time', 'time2');
    $time3.classList.add('time', 'time3');
    $time4.classList.add('time', 'time4');
    $time5.classList.add('time', 'time5');
    $time6.classList.add('time', 'time6');
    $time7.classList.add('time', 'time7');
    $time8.classList.add('time', 'time8');
    $time9.classList.add('time', 'time9');
    $time10.classList.add('time', 'time10');
    $time11.classList.add('time', 'time11');
    $time12.classList.add('time', 'time12');

    $time1.innerText = '|';
    $time2.innerText = '|';
    $time3.innerText = '|';
    $time4.innerText = '|';
    $time5.innerText = '|';
    $time6.innerText = '|';
    $time7.innerText = '|';
    $time8.innerText = '|';
    $time9.innerText = '|';
    $time10.innerText = '|';
    $time11.innerText = '|';
    $time12.innerText = '|';

    $container.append(
      $time1,
      $time2,
      $time3,
      $time4,
      $time5,
      $time6,
      $time7,
      $time8,
      $time9,
      $time10,
      $time11,
      $time12
    );
  };

  const setTime = ($second, $min, $hour, second, minute, hour) => {
    $hour.style.setProperty('--deg', (hour / 12) * 360);
    $min.style.setProperty('--deg', (minute / 60) * 360);
    $second.style.setProperty('--deg', (second / 60) * 360);
    console.log(second, minute, hour);
  };

  const init = () => {
    makeClock();
    const $hour = document.createElement('div');
    const $min = document.createElement('div');
    const $second = document.createElement('div');

    $hour.classList.add('hour', 'hand');
    $min.classList.add('minute', 'hand');
    $second.classList.add('second', 'hand');
    $container.append($hour, $min, $second);

    const startTime = new Date();

    let second = startTime.getSeconds();
    let minute = startTime.getMinutes();
    let hour = startTime.getHours();
    setTime($second, $min, $hour, second, minute, hour);

    setInterval(() => {
      second++;
      if (second === 60) {
        minute++;
        second = 0;
      }
      if (minute === 60) {
        hour++;
        minute = 0;
      }
      if (hour === 12) {
        hour = 0;
      }
      setTime($second, $min, $hour, second, minute, hour);
    }, 1000);
  };
  init();
};

export default AnalogClock;
