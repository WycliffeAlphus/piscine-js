function get(src, path) {
    let keysArr = path.split(".");
    let current = src;

    for (let i = 0; i < keysArr.length; i++) {
        if (current && typeof current === 'object') {
            const key = keysArr[i];
            const index = parseInt(key, 10);

            // Check if the key is a valid array index
            if (!isNaN(index) && Array.isArray(current)) {
                current = current[index]; // Access array element
            } else if (key in current) {
                current = current[key]; // Access object property
            } else {
                return undefined; // Key does not exist
            }
        } else {
            return undefined; // Current is not an object or array
        }
    }

    // Handle if current is a function
    if (typeof current === 'function') {
        try {
            current = current(); // Call the function
        } catch (e) {
            if (e instanceof TypeError && e.message.includes('object is not extensible')) {
                // Handle or log the error as needed
                console.error("Attempted to modify a non-extensible object.");
                return undefined; // Or handle differently
            } else {
                throw e; // Re-throw if it's not the expected error
            }
        }
    }

    return current;
}
