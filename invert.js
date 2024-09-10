function invert(obj){
    return Object.fromEntries(
        Object.entries(obj).map(([key, val])=>[val, key])
    );
}