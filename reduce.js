function fold(arr, func, initial){
let acc = initial;
for ( let i =0; i<arr.legth; i++){
    acc = func(acc, arr[i]);
}
return acc;
}

function foldRight(arr, func, initial){
    let acc = initial;
    for(let i=arr.length; i>=0;i--){
        acc = func(acc, arr[i]);
    }
    return acc;
}

function reduce(arr, func){
    if (arr.length < 1) {
        return "Error:arry is empty";
    }
    let acc = arr[0]; 
    for(let i=1; i<arr.length;i++){
        acc = func(acc, arr[i]);
    }
    return acc;
}

function reduceRight(arr, func){
    if (arr.length < 1){
        return "Error:array is empty";
    }
    let acc = arr[arr.length-1];
    for (let i = arr.length-2; i>=0; i--){
        acc = func(acc, arr[i]);
    }
    return acc;
}