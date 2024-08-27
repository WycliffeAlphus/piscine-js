function arrToSet(n){
return new Set(n);
}
function arrToStr(n){
return n.join("");
}
function setToArr(n) {
return [...n];
}
function setToStr(n){      
return [...n].join("");
}
function strToArr(n){
return n.split("");
}
function strToSet(n){
return new Set(n);
}
function mapToObj(n){
return Object.fromEntries(n);
}
function objToArr(n){
return Object.values(n);
}
function objToMap(n){
return new Map(Object.entries(n));
}
function arrToObj(n){
return {...n};
// let nObj = {};
// for (let i=0;i<n.length;i++){
// nObj[i] = n[i];
// }
// return nObj;
}
function strToObj(n){

    return {...n.split("")};
}

//returns a specific values for advanced types like Map and Set.
function superTypeOf(mS){
if (mS instanceof Map) {
return 'Map'
} else if ( mS instanceof Set) {
    return 'Set'
} else if ( mS instanceof Function){
return 'Function'
} else if (Array.isArray(mS)){
    return 'Array'
} else if ( mS===null){
    return 'null'
} else {
    if (typeof mS==='object'){
        return "Object"
    }
    if (typeof mS==='string'){
        return "String"
    }
    if (typeof mS==='number'){
        return "Number"
    }
    if (typeof mS==='object'){
        return "Object"
    }
    return typeof mS
}
}

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToStr(arr))          // -> '1213'
console.log(setToArr(set))          // -> [1, 2, 3]
console.log(setToStr(set))          // -> '123'
console.log(strToArr(str))          // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str))          // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map))          // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj))          // -> [45, 75, 24]
console.log(objToMap(obj))          // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr))          // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str))          // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log(superTypeOf(map))        // -> 'Map'
console.log(superTypeOf(set))        // -> 'Set'
console.log(superTypeOf(obj))        // -> 'Object'
console.log(superTypeOf(str))        // -> 'String'
console.log(superTypeOf(666))        // -> 'Number'
console.log(superTypeOf(NaN))        // -> 'Number'
console.log(superTypeOf(arr))        // -> 'Array'
console.log(superTypeOf(null))       // -> 'null'
console.log(superTypeOf(undefined))  // -> 'undefined'
console.log(superTypeOf(superTypeOf))// -> 'Function'
