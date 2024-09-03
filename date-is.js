function isValid(date) {
    const parsedDate = new Date(date);
    // Check if the parsed date is a valid date and the original string is in ISO format
    return !isNaN(parsedDate.getTime()) && parsedDate.toISOString().startsWith(date.split('T')[0]);
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
