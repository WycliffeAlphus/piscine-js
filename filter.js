function filter(array, func){
let filtered = [];
for (let i=0; i < array.length; i++){
    if (func(array[i], i , arr)){
        filtered.push(array[i]);
    }
}
return filtered;
}

function reject(array, func){
    let rejected = [];
    for (let i=0; i<array.length; i++){
        if (!func(array[i], i, arr)){
            rejected.push(arr[i]);
        }
    }
   return rejected 
}

function partition(array, func){
    let passed = [];
    let rejected = [];
    for (let i=0; i<array.length;i++){
        if (func(arr[i], i, arr)){
            passed.push(arr[i]);
        } else {
            rejected.push(arr[i]);
        }
    }
    return [passed, rejected];
}