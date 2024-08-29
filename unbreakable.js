function split(a, b){
if (typeof b==='undefined'){
    return [a]
}
let newS = [];
let temp = "";
for (let i=0; i<a.length; i++){
    if (a[i] === b){
        newS.push(temp)
        temp = ""
        continue
    }
    temp+=a[i]
}
if (temp.length > 0){
    newS.push(temp)
}
return newS
}


function join(a,b){
    if (typeof b==='undefined'){
        b = ','
    }
    let nString = "";
  
    for (let i=0; i < a.length;i++){

        if (nString.length===0){
            nString+=a[i]
        } else {
            nString += b+a[i]
        }
    }
    return nString
}
console.log((split('ggg - ddd - b', ' - ')))