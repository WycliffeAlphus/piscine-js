function multiply(a, b){
    let result = 0;
    let sign = false;
    if (a < 0 && b < 0) {
        a *= -1;
        b *= -1;
    } else if (a < 0 && b > 0){
        a *=-1;
        sign = true;
    } else if ( a>0 && b < 0){
        b *=-1;
        sign = true;
    }
for (let i =0; i<b;i++){
    result +=a
}
if (sign){
    result *=-1
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
