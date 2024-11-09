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

const log = debounce(() => console.log('Debounced!'), 1000);

log();