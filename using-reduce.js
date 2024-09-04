function adder(arr, initialValue = 0) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
}

function sumOrMul(arr, initialValue) {
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
