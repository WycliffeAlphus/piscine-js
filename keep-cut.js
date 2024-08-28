//cutFirst: returns the string with the first 2 characters removed.
function cutFirst(n){
let res ="";
for (let i=0;i<n.length;i++){
    if (i > 1){
        res+=n[i];
    }
}
return res;
}

function cutLast(n){
    let res ="";
    for (let i=n.length-1;i>=0;i--){
        if (i < n.length-2){
            res =n[i]+res;
        }
    }
    return res;
}

function cutFirstLast(n){
    let res ="";
for (let i=0;i<n.length-2;i++){
    if (i > 1){
        res+=n[i];
    }
}

return res;
}

function keepFirst(n){
    let res ="";
    for (let i=0;i<n.length;i++){
        res+=n[i]
        if (i==1){
           return res;
        }
    }
    return res;
}

function keepLast(n){
    let res = "";
    for (let i=n.length-1;i>=0;i--){
        res = n[i]+res;
        if (i < n.length-1){
            return res;
        }
    }
return res;
}

function keepFirstLast(n){
    if (n.length <= 4) {
        return n; // If the string length is 4 or less, return the string as it is.
    }
    // Use slice to get the first two and last two characters
    let firstTwo = n.slice(0, 2);  // First two characters
    let lastTwo = n.slice(-2);     // Last two characters

    return firstTwo + lastTwo;
}