// round behaves similar to Math.round()
function round(nb) {
    nb = Number(nb)
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER){
        return 0
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart <= nb - 1; ) {
        firstPart++
    }
    let result = (nb - firstPart) >= 0.5 ? firstPart + 1 : firstPart;
    return sign ? -result : result;
}

// ceil behaves similar to Math.ceil()
function ceil(nb) {
    nb = Number(nb)
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER){
        return 0
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart < nb; ) {
        firstPart++
    }

    return sign ? -(firstPart > nb ? firstPart - 1 : firstPart) : firstPart;
}

// floor behaves similar to Math.floor()
function floor(nb) {
    nb = Number(nb)
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER){
        return 0
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart < nb - 1; ) {
        firstPart++
    }

    return sign ? -(firstPart + (firstPart < nb ? 1 : 0)) : firstPart;
}


// trunc behaves similar to Math.trunc()
function trunc(nb) {
    nb = Number(nb)
    if (nb === 0 || nb > Number.MAX_SAFE_INTEGER || nb < Number.MIN_SAFE_INTEGER){
        return 0
    }
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart < nb - 1; ) {
        firstPart++
    }

    return sign ? -firstPart : firstPart;
}
