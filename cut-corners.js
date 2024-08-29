// Custom modulo function that acts like the % operator, without using it.
function modulo(a, b) {
    if (b===0){
        return 0;
    }
    let sign = false;
    if (a < 0 && b < 0) {
        a = -a;
        b = -b;
        sign = true;
    } else if (a < 0 && b > 0) {
        a = -a;
        sign = true;
    } else if (a > 0 && b < 0) {
        b = -b;
    }
    let num = a;
    while (num >= b) {
        num -= b;
    }
    if (sign) {
        num = -num;
    }
    return num;
}

// round function behaves similar to Math.round()
function round(nb) {
    nb = Number(nb);
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER) {
        return 0;
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let intPart = nb - modulo(nb, 1);
    let fractionalPart = nb - intPart;
    let result = fractionalPart >= 0.5 ? intPart + 1 : intPart;
    return sign ? -result : result;
}


// ceil function behaves similar to Math.ceil()
function ceil(nb) {
    nb = Number(nb);
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER) {
        return 0;
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let intPart = nb - modulo(nb, 1);
    let result = modulo(nb, 1) > 0 ? intPart + 1 : intPart;
    return sign ? -(result-1) : result;
}

// floor function behaves similar to Math.floor()
function floor(nb) {
    nb = Number(nb);
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER) {
        return 0;
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let intPart = nb - modulo(nb, 1);
    return sign ? -(intPart + (modulo(nb, 1) > 0 ? 1 : 0)) : intPart;
}

// trunc function behaves similar to Math.trunc()
function trunc(nb) {
    nb = Number(nb);

    let res = 0 ;
    if (nb > 0xfffffffff){
        nb -= 0xfffffffff;
        res = 0xfffffffff;
    }
    
    // Return 0 for special cases
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER) {
        return 0;
    }

    // Ensure that nb is a finite number
    if (!isFinite(nb)) {
        return 0;
    }

    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }

    // Use modulo safely
    let intPart = nb - modulo(nb, 1);
    return sign ? -(res+intPart) : (res+intPart);
}
