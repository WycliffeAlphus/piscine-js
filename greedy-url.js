function getURL(dataSet) {
  const urlRegex = /https?:\/\/\S+/g;
  return dataSet.match(urlRegex) || [];
}

function greedyQuery(dataSet) {
  const greedyQueryRegex = /https?:\/\/\S+\?\S*\w(?:[&?]\S*\w){2,}/g;
  
  return (dataSet.match(greedyQueryRegex) || []).filter(url => {
    const queryParams = url.split(/[&?]/).length - 1;
    return queryParams >= 3;
  });
}

function notSoGreedy(dataSet) {
  const notSoGreedyRegex = /https?:\/\/\S+\?\S+/g;
  
  return (dataSet.match(notSoGreedyRegex) || []).filter(url => {
    // Split the URL into base and query parts
    const [base, query] = url.split('?');
    
    // If there's no query part, it doesn't meet our criteria
    if (!query) return false;
    
    // Split the query part by '&', but be careful with array-like parameters
    const params = query.split(/&(?![^\[]*\])/);
    
    // Count the number of parameters
    const paramCount = params.length;
    
    // Return true if the number of parameters is 2 or 3
    return paramCount >= 2 && paramCount <= 3;
  });
}