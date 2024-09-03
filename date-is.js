function isValid(date){
return new Date(date)?true:false;
}

function isAfter(date1,date2){
return new Date(date1) > new Date(date2);
}

function isBefore(date1, date2){
return new Date(date1) < new Date(date2);
}

function isFuture(date){
if (new Date (date)){
    return new Date(date) > new Date();
}
return false;
}

function isPast(date){
    if (new Date (date)) {
        return new Date() > new Date(date);
    }
    return false;
}