// slice works like Array.slice() and String.slice().
function slice(a,b, c){
if (typeof c=='undefined'){
    c=a.length
}
if (b<0){
    b = a.length+b
}
if (typeof a === 'string'){
    let result ="";
    for (let i=b; i<c; i++){
      result+=a[i]  
    }
    return result;
}
if (typeof Array.isArray(a)){
    let result =[];
    for (let i=b; i<c; i++){
      result.push(a[i]); 
    }
    return result;
}
}

