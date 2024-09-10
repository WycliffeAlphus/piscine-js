
function filterValues(obj, callback){
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            if (callback(obj[key], key)){
                result[key] = obj[key];
            }
        } 
    }
    return result
}
function mapValues(obj, callback){
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            if (callback(obj[key], key)){
                result[key] = callback(obj[key], key);
        }
        }
    }
    return result
}
function reduceValues(obj, callback, initialValue) {
    let accumulator = initialValue !== undefined? initialValue:0
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        accumulator = callback(accumulator, obj[key], key);  
      }
    }
    
    return accumulator;
  }

