;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  class Stopwatch {
    constructor(element) {
      this.timer = element
      this.interval = null
      this.defaultTime = '00:00.00'
      this.startTime = 0
      //경과시간
      this.elapsedTime = 0
    }

    addZero(number) {
      if (number < 10) {
        return '0' + number
      }
      if (number > 99) {
        return number.toString().slice(0, -1)
      }
      return number
    }

    timeToString(time) {
      const date = new Date(time)
      const seconds = date.getUTCSeconds()
      const minutes = date.getUTCMinutes()
      const millisecond = date.getUTCMilliseconds()
      return `${this.addZero(minutes)}:${this.addZero(seconds)}.${this.addZero(
        millisecond
      )}`
    }

    print(text) {
      this.timer.innerHTML = text
    }

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime

      const time = this.timeToString(this.elapsedTime)
      this.print(time)
    }

    start() {
      clearInterval(this.interval)
      //여기서 Date.now()는 start 버튼을 누를 때의 시간이고, elapsed는 setInterval이 실행되고 나서, 계속 갱신되는 시간을 말한다.
      this.startTime = Date.now() - this.elapsedTime
      this.interval = setInterval(this.startTimer.bind(this), 10)
    }
    stop() {
      clearInterval(this.interval)
    }
    reset() {
      clearInterval(this.interval)
      this.startTime = 0
      this.elapsedTime = 0
      const time = this.timeToString(this.elapsedTime)
      this.print(time)
    }
  }

  const $startButton = get('.timer_button.start')
  const $stopButton = get('.timer_button.stop')
  const $resetButton = get('.timer_button.reset')
  const $timer = get('.timer')
  const $stopwatch = new Stopwatch($timer)

  $startButton.addEventListener('click', () => {
    $stopwatch.start()
  })
  $stopButton.addEventListener('click', () => {
    $stopwatch.stop()
  })
  $stopButton.addEventListener('click', () => {
    $stopwatch.stop()
  })
  $resetButton.addEventListener('click', () => {
    $stopwatch.reset()
  })
})()
