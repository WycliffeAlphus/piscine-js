function ionOut(n){

    const exp = /\b\w*t(ion)\w*\b/g

    let res = n.match(exp) || []

return res.map(function(word){
return word.replace(/ion/, '')
});

  // same as arrow function: return  res.map(word => word.replace(/ion/, ''));


}