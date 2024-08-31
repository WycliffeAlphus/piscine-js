function getURL(dataSet) {
const urlRegex = /https?:\/\/\S+/g;
return dataSet.match(urlRegex) || [];
  }
  

function greedyQuery(dataSet) {

        const greedyQueryRegex = /https?:\/\/\S+\?\S*\w(?:[&?]\S*\w){2,}/g;
        
        // Find all matches and return them as an array
        return (dataSet.match(greedyQueryRegex) || []).filter(url => {
          // Count the number of query parameters
          const queryParams = url.split(/[&?]/).length - 1;
          return queryParams >= 3;
        });
      }
      

function notSoGreedy(dataSet) {
        const notSoGreedyRegex = /https?:\/\/\S+\?\S*\w(?:[&?]\S*\w){1,2}/g;
        return (dataSet.match(notSoGreedyRegex) || []).filter(url => {
          // Count the number of query parameters
          const queryParams = url.split(/[&?]/).length - 1;
          return queryParams >= 2 && queryParams <= 3;
        });
}
      