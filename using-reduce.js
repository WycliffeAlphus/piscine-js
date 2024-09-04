function adder(arr, initialValue = 0) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
}

function sumOrMul(arr, initialValue) {
    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1); // Remove the first element from the array
    }
    return arr.reduce(
        (accumulator, currentValue) => {
            if (currentValue % 2 === 0) {
                return accumulator * currentValue;
            } else {
                return accumulator + currentValue;
            }
        },
        initialValue
    );
}

function funcExec(arr, initialValue) {
    return arr.reduce(
        (accumulator, currentFunc) => currentFunc(accumulator),
        initialValue
    );
}
