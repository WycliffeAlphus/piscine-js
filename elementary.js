//multiply that acts like the * operator, without using it.
function multiply(a, b){
    let result = 0;
    let sign = false;
    if (a < 0 && b < 0) {
        a =-a;
        b =-b;
    } else if (a < 0 && b > 0){
        a =-a;
        sign = true;
    } else if ( a>0 && b < 0){
        b =-b;
        sign = true;
    }
for (let i =0; i<b;i++){
    result +=a
}
if (sign){
    result =-result
}
return result
}

// divide that acts like the integer division operator /, without using it.
function divide(a, b){
    let sign = false;
    if (a < 0 && b < 0) {
        a =-a;
        b =-b;
    } else if (a < 0 && b > 0){
        a =-a;
        sign = true;
    } else if ( a>0 && b < 0){
        b =-b;
        sign = true;
    }
let count = 0;
let num = a;
while(num>=b){
    num-=b;
    count++;
}
if (sign){
    count=-count;
}
 return count;   
}

// modulo that acts like the % operator, without using it.
function modulo(a, b){
    let sign = false;
    if (a < 0 && b < 0) {
        a =-a;
        b =-b;
        sign = true;
    } else if (a < 0 && b > 0){
        a =-a;
        sign = true;
    } else if ( a>0 && b < 0){
        b =-b;
    }
let num = a;
while(num>=b){
    num-=b
}
if (sign){
    num = -num
}
 return num   
}
