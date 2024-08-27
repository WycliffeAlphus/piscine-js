is.num = function(n){
    if (typeof n==='Number'){
        return true;
    }
}

is.nan = function(n){
    if (typeof n==='NaN'){
        return true;
    }
}

is.str = function(n){
    if (typeof n==='String'){
        return true;
    }
}

is.bool = function(n){
    if (typeof n==='Boolean'){
        return true;
    }
}

is.undef = function(n){
    if (typeof n==='undefined'){
        return true;
    }
}
is.def = function(n){
    if (typeof n==='undefined'){
        return false;
    }
}
is.arr = function(n){
    if (typeof n==='Array'){
        return true;
    }
}
is.obj = function(n){
    if (typeof n==='Object' || typeof n==='null'){
        return true;
    }
}
is.fun = function(n){
    if (typeof n=='function'){
        return true;
    }
}
is.truthy = function(n){
    return !!n;
}
is.falsy = function(n){
    return !!n;
}