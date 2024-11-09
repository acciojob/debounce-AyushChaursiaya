function debounce(callback, delay, immediate = false) {
	  let timeOut;
	
	  return function(...args) {
		  const context = this;
		  const callNow = immediate && !timeOut;

		  clearTimeout(timeOut);

		  timeOut = setTimeout(() => {
			  timeOut = null;
			  if(!immediate) callback.apply(context, args);
		  }, delay);

		  if(callNow) callback.apply(context, args);
	  }
  }
  
  module.exports = debounce;


const debouncedFunction = debounce(() => console.log('Called!'), 1000, true);

debouncedFunction(); // Should log immediately
setTimeout(debouncedFunction, 500);  // Should not log
setTimeout(debouncedFunction, 1500); // Should log after delay