function pick(obj, keys) {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keysArray.includes(key))
    );
  }
  
  function omit(obj, keys) {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keysArray.includes(key))
    );
  }