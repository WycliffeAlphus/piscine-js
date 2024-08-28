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
for (let i=0;i<n.length;i++){
    if (i > 1){
        res+=n[i];
    }
}
for (let i=n.length-1;i>=0;i--){
    if (i < n.length-2){
        res =n[i]+res;
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
    for (let i=n.length;i>=0;i--){
        res =n[i]+res;
        if (i == n.length-2){
            return res;
        }
    }
    return res;
}

function keepFirstLast(n){
    let res ="";
for (let i=0;i<n.length;i++){
    res+=n[i];
    if (i > 1){
        break;
    }
}
for (let i=n.length-1;i>=0;i--){
    res =n[i]+res
    if (i < n.length-2){
        break;
    }
}
return res;
}
