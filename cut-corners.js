// round behaves similar to Math.round()
function round(nb) {
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart < nb; ) {
        firstPart++
    }
    let result = (nb - firstPart) >= 0.5 ? firstPart + 1 : firstPart;
    return sign ? -result : result;
}

// ceil behaves similar to Math.ceil()
function ceil(nb) {
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


let numArr = [3, -3, 3, -3, 0]

console.log(numArr.map(round))