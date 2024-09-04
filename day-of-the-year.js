function dayOfTheYear(date){
 const yearStart = new Date(date.getFullYear, 0, 1);
 const diffMilli = date - yearStart;
 diffDays = Math.floor(diffMilli/86400000);
 return diffDays+1; //cover for 1st of Jan
}