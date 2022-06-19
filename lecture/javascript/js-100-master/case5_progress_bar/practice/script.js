;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }
  let timerId
  const $progressbar = get('.progress-bar')

  const throttle = (callback, time) => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback()
      timerId = undefined
    }, time)
  }

  const onScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrollTop = document.documentElement.scrollTop

    const width = (scrollTop / height) * 100
    $progressbar.style.width = width + '%'
  }

  window.addEventListener('scroll', () => {
    throttle(onScroll, 50)
  })
})()
