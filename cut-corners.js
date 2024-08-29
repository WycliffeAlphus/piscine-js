// round behaves similar to Math.round()
function round(nb) {
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }

    let firstPart = 0;
    while (firstPart + 1 <= nb) {
        firstPart++;
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
    while (firstPart < nb) {
        firstPart++;
    }

    if (sign) {
        return -(firstPart > nb ? firstPart - 1 : firstPart);
    }

    return firstPart;
}

// floor behaves similar to Math.floor()
function floor(nb) {
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }

    let firstPart = 0;
    while (firstPart + 1 <= nb) {
        firstPart++;
    }

    if (sign) {
        return -(firstPart + (firstPart < nb ? 1 : 0));
    }

    return firstPart;
}

// trunc behaves similar to Math.trunc()
function trunc(nb) {
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }

    let firstPart = 0;
    while (firstPart + 1 <= nb) {
        firstPart++;
    }

    return sign ? -(firstPart) : firstPart;
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
