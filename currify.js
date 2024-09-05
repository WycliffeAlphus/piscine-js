function currify(fn) {

    const arity = fn.length;


    function curried(...args) {

        if (args.length >= arity) {
            return fn(...args);
        }

        return function (...moreArgs) {
            return curried(...args, ...moreArgs);
        };
    }

    return curried;
}

