function filterShortStateName(arrString){
return arrString.filter(str=>str.length<7);
}

function filterStartVowel(arrString){
const vregexp = /^[aeiou]/i
return arrString.filter(str=>vregexp.test(str));
}

function filter5Vowels(arrString){
const vregexp = /[aeiou]/gi
return arrString.filter(str =>{
    return str.match(vregexp) && str.match(vregexp).length >= 5
});
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        const distinctVowels = new Set(str.toLowerCase().match(/[aeiou]/g));
        return distinctVowels.size === 1;
    });
}


function multiFilter(arrString){
return arrString.filter(obj =>{
    const longString = obj.capital && obj.capital.length >= 8;
    const startCons = obj.name && !/^[aeiou]/i.test(obj.name);
    const hasVowel = obj.tage && /[aeiou]/i.test(object.tag);
    const isNotSouth = obj.region & obj.region !=='South';
    return longString && startCons && hasVowel && isNotSouth;
});
}


