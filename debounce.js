function debounce(func, wait) {
  let timeout;
  
  return function(...args) {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


function opDebounce(func, delay, options = {}) {
    let timer;
    let isLeadingCall = true;
    return function(...args) {
        if (options.leading && isLeadingCall) {
            func.apply(this, args);
            isLeadingCall = false;
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
                isLeadingCall = true;
            }, delay);
        }
    };
}
