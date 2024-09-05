function currify(func){
    return function(...args){
        return func(...args)
    }
}