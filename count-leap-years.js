function countLeapYears(date) {
    let year = date.getFullYear();
    let count = 0;
  
   
    for (let i = year; i > 4; i--) {
        if ((i % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
            count++;
        }
    }
    return count;
}