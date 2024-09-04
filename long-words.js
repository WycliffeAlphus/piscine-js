function longWords(arr){
  return arr.every((elm)=>typeof elm==='string'&&elm.length>=5)   
}

function oneLongWord(arr){
    return arr.some((elm)=>typeof elm==='string'&&elm.length>=10)
}

function noLongWords(arr){
    return arr.every((elm=>typeof elm !=='string'|| elm.length<7))
}