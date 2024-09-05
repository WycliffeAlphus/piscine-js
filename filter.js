function filter(array, func){
let filtered = [];
for (let i=0; i < array.length; i++){
    if (func(array[i], i , array)){
        filtered.push(array[i]);
    }
}
return filtered;
}

function reject(array, func){
    let rejected = [];
    for (let i=0; i<array.length; i++){
        if (!func(array[i], i, array)){
            rejected.push(array[i]);
        }
    }
   return rejected 
}

function partition(array, func){
    let passed = [];
    let rejected = [];
    for (let i=0; i<array.length;i++){
        if (func(array[i], i, array)){
            passed.push(array[i]);
        } else {
            rejected.push(array[i]);
        }
    }
    return [passed, rejected];
}