function nasa(n){
for (let i=1; i<=n; i++){
    let res ="";
    if (i%3===0 && i%5===0){
        if (res.length===0){
            res +="NASA"
        } else {
            res +=" "+"NASA"
        }
    } else if (i%3===0){
        if (res.length===0){
            res +="NA"
        } else {
            res +=" "+"NA"
        }
    } else if (i%5===0){
        if (res.length===0){
            res +="SA"
        } else {
            res +=" "+"SA"
        }
    } else {
        if (res.length===0) {
        res +=i.toFixed()
    } else {
        res +=" "+i.toFixed()
    }
}
}
}
console.log(nasa(15))
