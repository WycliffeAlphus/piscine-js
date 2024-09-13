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


function opDebounce(func, wait, leading = false) {
  let timeout;
  let lastCalled = false; // To track if the leading call was made
  
  return function(...args) {
    const callNow = leading && !timeout;

    const later = () => {
      timeout = null;
      if (!leading || lastCalled) {
        func.apply(this, args);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(this, args);
      lastCalled = true;
    }
  };
}

