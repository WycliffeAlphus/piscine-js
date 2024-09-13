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


function opDebounce(func, wait, options = {}) {
  const { leading = false } = options;
  let timeout;
  let lastCalled = false;

  return function (...args) {
    const context = this;
    const callNow = leading && !timeout;

    const later = () => {
      timeout = null;
      if (!leading || lastCalled) {
        func.apply(context, args);
      }
      lastCalled = false;
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
      lastCalled = true;
    }
  };
}
