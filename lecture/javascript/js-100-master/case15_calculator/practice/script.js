;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const getAll = (target) => {
    return document.querySelectorAll(target)
  }

  class Calculator {
    constructor(element) {
      this.element = element
      this.currentValue = ''
      this.prevValue = ''
      this.operation = null
    }
    allClear() {
      this.currentValue = ''
      this.prevValue = ''
      this.resetOperation()
    }

    appendNumber(number) {
      if (number == '.' && this.currentValue.includes('.')) return
      this.currentValue = this.currentValue.toString() + number.toString()
      console.log(this.currentValue)
    }

    setOperation(operation) {
      this.resetOperation()
      this.operation = operation
      this.prevValue = this.currentValue
      this.currentValue = ''

      const elements = Array.from(getAll('.operation'))
      const element = elements.filter((element) =>
        element.innerText.includes(operation)
      )[0]

      element.classList.add('active')
    }

    updateDisplay() {
      if (this.currentValue) {
        this.element.value = this.currentValue
        return
      }
      if (this.prevValue) {
        this.element.value = this.prevValue
        return
      }
      this.element.value = 0
    }
    resetOperation() {
      this.operation = null
      const elements = Array.from(getAll('.operation'))
      elements.forEach((element) => {
        element.classList.remove('active')
      })
    }
    compute() {
      console.log('comput')
      let computetion
      const prev = parseFloat(this.prevValue)
      const current = parseFloat(this.currentValue)
      if (isNaN(prev) || isNaN(current)) return
      console.log(this.operation)
      switch (this.operation) {
        case '*':
          computetion = prev * current
          break
        case '÷':
          computetion = prev / current
          break
        case '+':
          console.log('+')
          computetion = prev + current
          break
        case '-':
          computetion = prev - current
          break
        default:
          return
      }

      this.currentValue = computetion.toString()
      this.prevValue = ''
      this.resetOperation()
    }

    clear() {
      if (this.currentValue) {
        this.currentValue = ''
        return
      }
      if (this.operation) {
        this.resetOperation()
        this.currentValue = this.prevValue
        this.prevValue = ''
        return
      }
      if (this.prevValue) {
        this.prevValue = ''
        return
      }
    }
  }

  const numberButtons = getAll('.cell_button.number')
  const operationButtons = getAll('.cell_button.operation')
  const computeButton = get('.cell_button.compute')
  const allClear = get('.cell_button.all_clear')
  const clearButton = get('.cell_button.clear')
  const display = get('.display')

  const calculator = new Calculator(display)

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.setOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

  computeButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
  })

  clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })

  allClear.addEventListener('click', () => {
    calculator.allClear()
    calculator.updateDisplay()
  })
})()
