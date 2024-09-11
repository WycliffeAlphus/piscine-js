function filterEntries(cart, func){
   let res = {};
   for (let [key, value] in object.entries(cart)){
    if (func([key, value])){
        res[key] = value;
    }
   }
   return res;
}

function mapEntries(cart, func){
    let res = {};
    for (let [key, value] in object.entries(cart)){
        if (func([key, value])){
            res = func([key, value]);
        }
    }
    return res
}


function reduceEntries(cart, reducer, initialValue){
    let entries = Object.entries(cart)
    let acc, start;

    if (initialValue === 'undefined'){
        if (entries.length === 0) return undefined;
        start = 1;
        acc = cart[0][1];
    } else {
        start = 0;
        acc = initialValue
    }

    for (let i=0; i<entries.length; i++){
        acc = func(acc, entries[i])
    }
return acc
}


function totalCalories(cart){
return Number(reduceEntries(cart, (total, [k, v])=>total+nutritionDB[k].calories*v/100)).toFixed(1); 
};

function lowCarbs(cart){
    return filterEntries(cart, ([k, v])=>nutritionDB[k].carbs*v/100<50);
}

function cartTotal(cart) {
  return mapEntries(cart, (k, v) => {
    const itemTotal = {};
    for (const nutrient in nutritionDB[k]){
        itemTotal[nutrient] = Number(nutritionDB[k]*v/100).toFixed(1);
    }
    return [k, itemTotal];
  });
}
