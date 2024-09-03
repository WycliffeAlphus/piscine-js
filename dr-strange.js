function addWeek(date){

    const weekDay = {
        0 : "Monday",
        1 : "Tuesday",
        2 : "Wednesday",
        3 : "Thursday",
        4 : "Friday",
        5 : "Saturday",
        6 : "Sunday",
        7 : "secondMonday",
        8 : "secondTuesday",
        9 : "secondWednesday",
        10 : "secondThursday",
        11 : "secondFriday",
        12 : "secondSaturday",
        13 : "secondSunday",
    } 

const epoch = new Date(Date.UTC(1, 0, 1));

const diffMilliSeconds =  date - epoch

const diffDays = Math.floor(diffMilliSeconds/86400000)

return weekDay[diffDays%14]
}

function timeTravel(obj){
    const newDate = new Date(obj.date);
    newDate.setHours(obj.hour, obj.minute, obj.second);
    return newDate;
}
