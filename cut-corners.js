// round behaves similar to Math.round()
function round(nb) {
    let sign = nb < 0;
    if (sign) {
        nb = -nb;
    }
    let firstPart = 0;
    for (; firstPart <= nb; firstPart++) {
        if (firstPart + 1 > nb) {
            break;
        }
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
    for (; firstPart <= nb; firstPart++) {
        if (firstPart >= nb) {
            break;
        }
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
    for (; firstPart < nb; firstPart++) {
        if (firstPart + 1 > nb) {
            break;
        }
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
    for (; firstPart < nb; firstPart++) {
        if (firstPart + 1 > nb) {
            break;
        }
    }

    return sign ? -firstPart : firstPart;
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
