function multiply(a, b){
    let result = 0;
for (let i =0; i<b;i++){
    result +=a
}
return result
}

function divide(a, b){

let count = 0;
let num = a;
while(num>=b){
    num-=b
    count++
}
 return count   
}

function modulo(a, b){
    let count = 0;
let num = a;
while(num>=b){
    num-=b
    count++
}
 return num   
}
