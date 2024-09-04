function adder(arr){
    return arr.reduce(
        (accumulator,currentValue) => accumulator+currentValue
    );
}

function sumOrMul(arr){
    return arr.reduce(
        (accumulator, currentValue)=> {
            if (currentValue%2===0){
               return accumulator * currentValue
            } else {
               return accumulator + currentValue
            }
        }
    )
}

function funcExec(arr){
    return arr.reduce((accumulator, currentFunc)=>currentFunc(accumulator))
}