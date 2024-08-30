function get(src, path) {
    let keysArr = path.split(".");
    let current = src;
    for (let i = 0; i < keysArr.length; i++) {
      if (current == null) {  // null or undefined
        return undefined;
      }
      const key = keysArr[i];
      if (Array.isArray(current)) {
        const index = parseInt(key, 10);
        if (!isNaN(index)) {
          current = current[index];
          continue;
        }
      }
      if (typeof current === 'object' || typeof current === 'function') {
        current = current[key];
      } else {
        return undefined;
      }
    }
    return current;
  }