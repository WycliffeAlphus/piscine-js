function first(n){
    if (typeof n === "string"){
        return n.charAt(0);
    }
    if (Array.isArray(n)) {
        return n[0];
    }
}

function last(n){
    if (typeof n === "string"){
        return n.charAt(n.length-1);
    }
    if (Array.isArray(n)){
        return n[n.length-1];
    }
}

function kiss(n){
    if  (typeof n == "string"){
        const newarr = [n.length-1, n.charAt(0)];
        return newarr;
    }

    if (Array.isArray(n)){
        const newarr2 = [n.length-1, n[0]];
        return newarr2;
    }
}