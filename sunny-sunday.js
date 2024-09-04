function sunnySunday(date){
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const epoch = new Date('0001-01-01');
 const days = Math.floor((date-epoch) / (24 * 60 * 60 * 1000));
 const weekdayIndex = days % 6;
 return weekdays[weekdayIndex];
}