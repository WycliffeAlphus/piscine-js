function isPositive(n){
    return n>0?true:false;
}

function abs(n){
    if (typeof n===null){
        return 0
    } else if (n<0) {
        return n*-1
    } else if (typeof n !== Number) {
        return NaN
    } else {
       return n 
    }
}
