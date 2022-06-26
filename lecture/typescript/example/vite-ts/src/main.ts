import './style.css';

type Operator = '+' | '-' | '*' | '%';

interface CalculatorInterface {
  tempValue: string | number;
  tempOperator?: Operator | string;
  operator?: Operator | string;
  render(inputValue: string | number): void;
  reset(): void;
  calculate(operator: Operator | string): void;
  initEvent(): void;
}

type ComputedValue = {
  [key in Exclude<Operator, '='>]: (num1: number, num2: number) => number;
};

const VALID_NUMBER_OF_DIGITS = 3;
const INIT_VALUE = 0;
const OPERATORS = ['+', '-', '*', '%'];

const validateNumberLength = (value: string | number) => {
  return String(value).length < VALID_NUMBER_OF_DIGITS;
};

const isZero = (value: string) => Number(value) === 0;

const getComputedValue: ComputedValue = {
  '+': (num1: number, num2: number) => num1 + num2,
  '-': (num1: number, num2: number) => num1 - num2,
  '*': (num1: number, num2: number) => num1 * num2,
  '%': (num1: number, num2: number) => num1 / num2,
};

const Calculator: CalculatorInterface = {
  tempValue: INIT_VALUE,
  tempOperator: undefined,
  operator: undefined,

  render(inputValue: string | number) {
    const resultEl = <HTMLDivElement>document.querySelector('#result');
    const prevValue = resultEl.innerText;
    if (!validateNumberLength(prevValue)) {
      alert(`${VALID_NUMBER_OF_DIGITS}자리 이상의 숫자는 입력하지 못합니다.`);
      return;
    }

    if (resultEl) {
      resultEl.innerText = isZero(prevValue)
        ? String(inputValue)
        : String(prevValue + inputValue);
    }
  },

  reset() {
    const resultEl = <HTMLDivElement>document.querySelector('#result');
    resultEl.innerText = String(INIT_VALUE);
    this.tempValue = INIT_VALUE;
    this.tempOperator = undefined;
  },

  calculate(operator: Operator | string) {
    const isReadyCalculated = operator === '=';
    const isTempCalculated = OPERATORS.includes(operator);
    if (isTempCalculated) {
      const resultEl = <HTMLDivElement>document.querySelector('#result');

      this.tempOperator = operator;
      this.tempValue = Number(resultEl.innerText);

      resultEl.innerText = String(0);
      return;
    }

    if (
      this.tempOperator &&
      ['+', '-', '*', '%'].includes(this.tempOperator) &&
      isReadyCalculated
    ) {
      const resultEl = <HTMLDivElement>document.querySelector('#result');

      const resultValue = getComputedValue[
        this.tempOperator as Exclude<Operator, '='>
      ](Number(this.tempValue), Number(resultEl.innerText));
      resultEl.innerText = String(resultValue);
    }
  },

  initEvent() {
    const buttonContainerEl = document.querySelector('.contents');
    buttonContainerEl?.addEventListener('click', ({ target }) => {
      const buttonText = (<HTMLButtonElement>target).innerText;
      if (buttonText === 'AC') {
        this.reset();
      } else if (['+', '-', '*', '%', '='].includes(buttonText)) {
        this.calculate(buttonText);
      } else {
        this.render(Number(buttonText));
      }
    });
  },
};

Calculator.render(INIT_VALUE);
Calculator.initEvent();
