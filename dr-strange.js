function addWeek(date) {
   
    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday',
        'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    
  
    const epoch = new Date('0001-01-01');
    const dayDiff = Math.floor((date - epoch) / (86400000));
    
   
    const dayIndex = dayDiff % 14;

 
    return days[dayIndex];
}



function timeTravel(obj){
    const newDate = new Date(obj.date);
    newDate.setHours(obj.hour, obj.minute, obj.second);
    return newDate;
}

console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
console.log(
    timeTravel({
      date: new Date('2020-05-29 23:25:22'),
      hour: 21,
      minute: 22,
      second: 22,
    }).toString()
    )