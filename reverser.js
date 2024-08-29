function reverse(nb){
let newArray = [];
if (Array.isArray(nb)){
    for (let i=0;i<nb.length; i++){
        newArray.unshift(nb[i])
    }

    return newArray
}

if (typeof nb==='string'){
    let newArray1 = "";
    for (let i=0;i<nb.length; i++){
        newArray1 = nb[i]+newArray1
    }
    return newArray1
}
}
