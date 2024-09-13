function debounce(func, wait){
    let timeout;
    return function(...args){
        const later = () => {
            timeout = null;
            func.apply(this, args)
        };
        clearTimeout(timeout);
        timeout = setTimout(later, wait)
    };
}

function opDebounce(func, wait, leading = false){
    let timeout;
    let lastCalled = false;

    return function(args){
        const callNow = leading && !timeout;

        const later = () => {
            timeout = null;
            if (!leading || lastCalled){
                func.apply(this, args);
            }
        };
        clearTimeout(timeout);
       
        if(callNow) {
            func.apply(this, args);
            lastCalled =true;
        }
    }
}