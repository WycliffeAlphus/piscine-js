function debounce(func, wait){
    let timeout;
    return function(...args){
        const later = () => {
            timeout = null;
            func.apply(this.args)
        };
        clearTimeout(timeout);
        timeout = setTimout(later, wait)
    };
}