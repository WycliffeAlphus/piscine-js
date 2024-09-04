function sunnySunday(date){
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const start = new Date('0001-01-01T00:00:00Z');
 const daysSinceStart = Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
 const weekdayIndex = (daysSinceStart+1)%6;
 return weekdays[weekdayIndex];
}