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

function reduceKeys(obj, callback, accumulator){
    let keys = Object.keys(obj)
    for (let i=0; i<keys.length; i++){
        if (obj.hasOwnProperty(keys[i])){
            if (typeof accumulator === 'undefined') {
                accumulator = keys[i]
                continue
            }

         accumulator = callback(accumulator, keys[i]);
          
        }
    }
    return accumulator;
}
let cart = {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
  }
 

