// function debounce(callback, delay, immediate = false) {
// 	  let timeOut;
	
// 	  return function(...args) {
// 		  const context = this;
// 		  const callNow = immediate && !timeOut;

// 		  clearTimeout(timeOut);

// 		  timeOut = setTimeout(() => {
// 			  timeOut = null;
// 			  if(!immediate) callback.apply(context, args);
// 		  }, delay);

// 		  if(callNow) callback.apply(context, args);
// 	  }
//   }
  
  // module.exports = debounce;

let counter = 0;
const callback = () => console.log(counter++);
const debouncedCallback = debounce(callback, 1000);

// Call the debounced function instead of the original callback
debouncedCallback();
debouncedCallback();
debouncedCallback();
// "0" will be printed to the console once after 1 second