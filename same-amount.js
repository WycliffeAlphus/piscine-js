function sameAmount(a, b, c){
    let firstMatch = a.match(b);
    let secondMatch = a.match(c);
    return (firstMatch.length===secondMatch.length)?true:false;
}