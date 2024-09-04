function dayOfTheYear(date){
 const yearStart = new Date(date.getFullYear, 0, 1);
 const diffInMilliseconds = date - startOfYear;;
 const diffDays = Math.floor(diffMilli/(24*60*60*1000));
 return diffDays+1; //cover for 1st of Jan
}