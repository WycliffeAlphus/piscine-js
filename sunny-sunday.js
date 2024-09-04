function sunnySunday(date){
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const start = new Date(1, 0, 1);
 const daysSinceStart = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
 const weekdayIndex = daysSinceStart%6;
 return weekdays[weekdayIndex];
}