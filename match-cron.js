function matchCron(cron, date){
    const [cronMinute, cronHour, cronDayOfMonth, cronMY, cronDW] = cron.split(' ');
    const rMinute = date.getMinutes();
    const rHour = date.getHours();
    const rdayofMonth = date.getDate();
    const rMonth = date.getMonth()+1;
    const rdayOfWeek = date.getDay() || 7;

    function matcher(cronVal, dateVal){
        return cronVal === "*" || parseInt(cronVal) === dateVal;
    }
    return matcher(cronMinute, rMinute) &&
           matcher(cronHour, rHour) &&
           matcher(cronDayOfMonth, rdayofMonth) &&
           matcher(cronMY, rMonth) &&
           matcher(cronDW, rdayOfWeek);
}