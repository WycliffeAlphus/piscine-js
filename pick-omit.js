function pick(obj, strArr){
const keysArr = Array.isArray(strArr)?strArr:[strArr]
return Object.fromEntries(
    Object.entries(obj).filter((key)=>keysArr.includes(key))
);
}
function omit(obj, strArr){
    const keysArr = Array.isArray(strArr)?strArr:[strArr]
    return Object.fromEntries(
        Object.entries(obj).reject((key)=>keysArr.includes(key))
    );
}