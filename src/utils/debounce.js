export default function debounce (callback, waitTime = 100) {
  let timer = null

  return function debouncedMethod (...args) {
    const delayedFunctionCall = () => {
      timer = null

      callback(...args)
    }

    clearTimeout(timer)
    timer = setTimeout(delayedFunctionCall, waitTime)
  }
}
