function map(arr, func) {
    const result = [];
    for (let i= 0; i<arr.length;i++){
        result.push(func(arr[i], i, arr));
    }
    return result;
}


function flatMap(arr, func) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        const mappedValue = func(arr[i], i, arr); 
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue); 
        } else {
            result.push(mappedValue); 
        }
    }
    return result; 
}
