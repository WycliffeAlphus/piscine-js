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
return n.join("");
}
function strToArr(n){
return n.Split();
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
return new Map(Object.fromEntries(n));
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
    return {...n.Split()};
}

//returns a specific values for advanced types like Map and Set.
function superTypeof(mS){
if (mS instanceof Map) {
return 'Map'
} else if ( mS instanceof Set) {
    return 'Set'
} else if ( mS instanceof Function){
return 'Function'
} else if (Array.isArray(mS)){
    return 'Array'
} else if ( typeof mS==='null'){
    return 'null'
} else if ( typeof mS==='undefined'){
    return 'Undefined'
}else if ( typeof mS=== 'nan'){
    return 'Number'
}else {
    let n = typeof mS;
    return n.charAt(0).toUpperCase+n.slice[1];
}
}