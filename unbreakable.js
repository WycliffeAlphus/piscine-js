function split(a, b){
if (typeof b==='undefined'){
    return [a]
}
 if (b === "") {
        let newS = [];
        for (let i = 0; i < a.length; i++) {
            newS.push(a[i]); // Push each character into the array
        }
        return newS;
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

        if (i===0){
            nString+=a[i]
        } else {
            nString += b+a[i]
        }
    }
    return nString
}
