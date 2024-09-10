function fusion(obj1, obj2){
 const allkeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
 let result = {};
 allkeys.forEach(key => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (Array.isArray(val1)&&Array.isArray(val1)){
        result[key] = [...val1, ...val2];
    } else if (typeof val1 === 'string' && typeof val2 === 'string') {
        result[key] = val1+ ' '+val2;
    } else if (typeof val1 === 'number' & typeof val2 === 'number') {
        result[key] = val1+val2;
    } else if (typeof val1 === 'object' && !Array.isArray(val1)&&typeof val2 === 'object' && !Array.isArray(val2)){
        result[key] = fusion(val1, val2);
    } else {
        result[key] = val2 !== undefined ? val2 : val1;
    }
 });
 return result;
}