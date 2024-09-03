function firstDayWeek(weekNumber, year) {
    
    let firstDay = new Date(year, 0, 1);
    

    let dayOfWeek = firstDay.getDay();

    let firstMonday;
    
   
    if (dayOfWeek === 0) {
        firstMonday = new Date(year, 0, 2); 
    } else if (dayOfWeek === 1) {
        firstMonday = new Date(year, 0, 1); 
    } else if (dayOfWeek > 1) {
        firstMonday = new Date(year, 0, 1 + (8 - dayOfWeek)); 
    }


    let startOfWeek = new Date(firstMonday);
    startOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    let day = startOfWeek.getDate().toString().padStart(2, '0');
    let month = (startOfWeek.getMonth() + 1).toString().padStart(2, '0');
    let formattedDate = `${day}-${month}-${startOfWeek.getFullYear()}`;

    return formattedDate;
}

