//indexOf accept an array to be searched, and a value to be matched, returns the index of the first occurrence. 
function indexOf(a, b, c){
if (typeof c==='undefined'){
   c = 0;
}

for (let i=c; i<a.length; i++){
    if (a[i] === b) {
        return i;
    }
}
return -1;
}

// lastIndexOf returns the index of the last occurrence
function lastIndexOf(a, b, c){
    if (typeof c==='undefined'){
        c = a.length;
     }
     for (let i=c; i>=0; i--){
         if (a[i] === b) {
             return i;
         }
     }
     return -1;
}

// includes returns true if te value was found in the array, and false otherwise
function includes(a,b,c){
    if (typeof c==='undefined'){
        c = 0;
     }
    for (let i=c; i<a.length; i++){
        if (a[i] === b) {
            return true;
        }
    }
    return false;
}

