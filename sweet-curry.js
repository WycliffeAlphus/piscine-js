function mult2(arg){
return function(arg2){
    return arg*arg2
}
}

function add3(arg){
    return function(arg2){
        return function(arg3){
            return arg+arg2+arg3
        }
    }
}

function sub4(arg){
    return function(arg2){
        return function(arg3){
            return function(arg4){
            return ((arg-arg2)-(arg3))-arg4
            }
        }
    }
}