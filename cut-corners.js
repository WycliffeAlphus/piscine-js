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

    // Handle rounding based on the fractional part
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

    return sign ? -firstPart : firstPart;
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

    // Adjust for negative numbers
    return sign ? -(firstPart + (nb > firstPart ? 1 : 0)) : firstPart;
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

    return sign ? -firstPart : firstPart;
}
