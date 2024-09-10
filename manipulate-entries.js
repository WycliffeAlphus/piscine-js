function filterEntries(cart, [key, value]){
return Object.fromEntries(
    Object.entries(cart).filter(([k, v])=>key===k&&value===v)
); 
}

function mapEntries(cart, [key, value]){
    return Object.fromEntries(
        object.entris(cart).map(([k,v])=>[key(k), value(v)])
    )
}


function reduceEntries(cart, reducer, initialValue){
    return Object.entries(cart).reduce(
        (accumulator, [k, v]) => reducer(accumulator, [k, v]),
        initialValue
    );
}


function totalCalories(cart){
return reduceEntries(cart, (acc, [k,v])=> acc+(v.calories || 0), 0)
}

function lowCarbs(cart){
return filterEntries(cart, ['carbs', (v) => v < 50  ])
}

function cartTotal(cart) {
    return Object.entries(cart).map(([k, v]) => ({
        item: k,
        totalCalories: v.calories || 0,
        totalProteins: v.protein || 0,
        totalCarbs: v.carbs || 0,
        totalFats: v.fats || 0
    }));
}
