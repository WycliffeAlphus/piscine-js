function triangle(a, b){
    let count = 0;
    let res ="";
    for (let i=0;i<b;i++){
        count++
        if (count != b) {
            res += a.repeat(count)+"\n"
        } else {
            res += a.repeat(count)
        }
    }
    return res
}
// console.log(triangle('#', 4))