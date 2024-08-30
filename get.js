function get(src, path){

    let keysArr = path.split(".");
    let current = src;

    for (let i = 0; i < keysArr.length; i++) {
       
        if (current && typeof current === 'object') {
            // Handle array indices
            const key = keysArr[i];
            const index = parseInt(key, 10);
            if (!isNaN(index) && Array.isArray(current)) {
                current = current[index]; 
            } else if (key in current) {
                current = current[key]; // Access object property
            } else {
                return undefined; // Key does not exist
            }
        } else {
            return undefined; // Current is not an object or array
        }
    }

    // If the last key is a method
    if (typeof current === 'function') {
        return current(); // Call the function
    }

    return current; 
}
