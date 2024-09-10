function filterKeys(obj, callback){
    let res = {};
    let keys = Object.keys(obj)
    for (let i=0; i<keys.length;i++){
        if (obj.hasOwnProperty(keys[i])){
            if (callback(keys[i])){
               res[keys[i]] = obj[keys[i]]
            }
        }
    }
    return res;
}

function mapKeys(obj, callback){
let res = {};
let keys = Object.keys(obj)
for (let i=0; i<keys.length; i++){
    if (obj.hasOwnProperty(keys[i])){
        if (callback(keys[i])){
            res[callback(keys[i])] = obj[keys[i]]
        }
    }
}
return res;
}

function reduceKeys(obj, callback, initialValue){
    accumulator = initialValue !== undefined? initialValue:""
    let res = "";
    let keys = Object.keys(obj)
    for (let i=0; i<keys.length; i++){
        if (obj.hasOwnProperty(keys[i])){
            if (res === ""){
                res += keys[i]
            } else {
                res += callback(accumulator, keys[i]);
            }
          
        }
    }
    return res;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
