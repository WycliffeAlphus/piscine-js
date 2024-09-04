function matchCron(cron, date){
    const[cronMinute, cronHour, cronDayOfMonth, cronMY, cronDW] = cron.split(' ');
    rMinute = date.getMinutes();
    rHour = date.getHours();
    rdayofMonth = date.getDate();
    rMonth = date.getMonth()+1;
    rdayOfWeek = date.getDay() || 7;

    function matcher(cronVal, dateVal){
        return cronVal === "*" || parseInt(cronVal) === dateVal;
    }
    return matcher(cronMinute, rMinute) &&
           matcher(cronHour, rHour) &&
           matcher(cronDayOfMonth, rdayofMonth) &&
           matcher(cronMY, rMonth) &&
           matcher(cronDW, rdayOfWeek);
}