function sameAmount(a, b, c) {
    // Ensure the global flag for both regular expressions
    const makeGlobal = (regex) => new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
    
    const firstMatch = a.match(makeGlobal(b)) || [];
    const secondMatch = a.match(makeGlobal(c)) || [];

    return firstMatch.length === secondMatch.length;
}
