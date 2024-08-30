function get(src, path){

let keysArr = path.split(".")
let current = src;
for (let i=0; i < keysArr.length; i++){
    if ( current && typeof src==='object' && keysArr[i] in current){
        current = current[keysArr[i]];
    } else {
        return 'undefined'
    }
    }
  
   return current 
}
