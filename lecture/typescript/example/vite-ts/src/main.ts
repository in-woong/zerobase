import './style.css';

const VALID_NUMBER_OF_DIGITS = 3;
const BASE_DIGIT = 10;
let temp;
let calculator;

const app = document.querySelector<HTMLDivElement>('#app')!;

const input = app.querySelector('.input');
const numberBtn = app.querySelectorAll('.number');
const calBtn = app.querySelectorAll('.cal');
const returnBtn = app.querySelector('.return');
const resetBtn = app.querySelector('.reset');

const clickNumber = (e: any) => {
  const inputValue = input.value;
  console.log(inputValue);
  input.value = e.target.innerText + inputValue;
};

const clickCal = (e) => {
  temp = input.value;
  input.value = '';
  calculator = e.target.innerText;
};

const clickReturn = () => {
  if (calculator == '+') {
    input.value = Number(temp) + Number(input.value);
  } else if (calculator == '-') {
    input.value = Number(temp) - Number(input.value);
  } else if (calculator == '*') {
    input.value = Number(temp) * Number(input.value);
  } else if (calculator == '%') {
    input.value = Number(temp) % Number(input.value);
  } else {
    return;
  }
};

const clickReset = () => {
  input.value = '';
  temp = 0;
  calculator = '';
};

numberBtn.forEach((btn) => btn.addEventListener('click', clickNumber));
calBtn.forEach((btn) => btn.addEventListener('click', clickCal));
returnBtn?.addEventListener('click', clickReturn);
resetBtn?.addEventListener('click', clickReset);
