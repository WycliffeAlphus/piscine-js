function triangle(a, b){
    let count = 0;
    let res ="";
    for (let i=0;i<b;i++){
        count++
        res += a.repeat(count)+"\n"
    }
    return res
}

console.log(triangle("*",5))