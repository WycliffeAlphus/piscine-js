// Create a function named chunk which accepts an array and an integer representing a size.
// Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. 
// The length of each sub-array is denoted by the size argument.
// If the array cannot be split evenly, the last sub-array will contain the remaining elements.


function chunk(a, b) {
    let nArray = [];
    let temp = [];

    for (let i = 0; i < a.length; i++) { 
        temp.push(a[i]);
        if (temp.length === b) { 
            nArray.push(temp);
            temp = []; 
        }
    }
    // Push the remaining elements as the last chunk if any exist
    if (temp.length > 0) {
        nArray.push(temp);
    }

    return nArray;
}