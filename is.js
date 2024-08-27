is.num = function(n){
    if (typeof n==='number'){
        return true;
    }
}

is.nan = function(n){
    return n !== n;
}

is.str = function(n){
    if (typeof n==='string'){
        return true;
    }
}

is.bool = function(n){
    if (typeof n==='boolean'){
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
  return Array.isArray(n);
}
is.obj = function(n){
    return (typeof n === 'object') && (!Array.isArray(n)) && ( n!==null);
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
    return !n;
}