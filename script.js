function debounce(callback, delay, immediate = false) {
  let timeOut = null;
  let firstCall = true;

  return function(...args) {
    const context = this;
    const callNow = immediate && (firstCall || !timeOut);

    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      if (!immediate) callback.apply(context, args);
      timeOut = null;
    }, delay);

    if (callNow) {
      callback.apply(context, args);
      firstCall = false;
    }
  };
}

  module.exports = debounce;

let counter = 0;
const callback = () => console.log(counter++);
const debouncedCallback = debounce(callback, 1000);

// Call the debounced function instead of the original callback
debouncedCallback();
debouncedCallback();
debouncedCallback();
// "0" will be printed to the console once after 1 second