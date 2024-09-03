function isValid(date) {
    return !isNaN(new Date(date).valueOf());
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && new Date(date1) > new Date(date2);
}

function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && new Date(date1) < new Date(date2);
}

function isFuture(date) {
    return isValid(date) && new Date(date) > new Date();
}

function isPast(date) {
    return isValid(date) && new Date() > new Date(date);
}
