function get(src, path) {
    let keysArr = path.split(".");
    let current = src;
    for (let i = 0; i < keysArr.length; i++) {
      if (current && typeof current === 'object') {
        const key = keysArr[i];
        const index = parseInt(key, 10);
        if (!isNaN(index) && Array.isArray(current)) {
          current = current[index];
        } else if (key in current) {
          current = current[key];
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    }
    return current;
  }