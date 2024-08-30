function nasa(n){
    if (n%3===0&&n%5===0){
        return "NASA"
    }
    if (n%3===0){
        return "NA"
    }
    if (n%5===0){
        return "SA"
    }
let res ="";
    while (n > 0){
        let last = n%10;
        if (res.length===0){
            res +=last.toFixed()
        } else {
            res =last.toFixed()+","+res
        }
        n = Math.floor(n/10)
    }
    return res
}

console.log(nasa(11144))