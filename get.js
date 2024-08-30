function get(src, path){

let keysArr = path.split(".")
let current = src;
for (let i=0; i < keysArr.length; i++){
    if (typeof src==='object'){
        current = current[keysArr[i]];
    } else {
        return 'undefined'
    }
    }
  
   return current 
}
