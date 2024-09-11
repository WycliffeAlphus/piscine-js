const deepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item)); // Recursively copy array items
    }

    if (obj instanceof Date) {
        return new Date(obj); // Handle Date objects
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj); // Handle RegExp objects
    }

    const copiedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = deepCopy(obj[key]); // Recursively copy object properties
        }
    }
    return copiedObj;
};
