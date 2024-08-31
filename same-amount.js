function sameAmount(a, b, c){
    let firstMatch = a.match(b);
    let secondMatch = a.match(c);
    firstMatch = firstMatch || []
    secondMatch = secondMatch || []
    return firstMatch.length===secondMatch.length;
}