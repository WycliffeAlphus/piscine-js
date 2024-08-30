function pyramid(a, b) {
    let res = "";
    for (let i = 0; i < b; i++) {
     
        const spaces = ' '.repeat((b - i - 1)*a.length); //the leading spaces
        // Generate the current row of the pyramid
        const row = a.repeat(2 * i + 1);
       
        if (i < b-1){
            res += spaces + row + "\n";
        } else {
            res += spaces + row
        }
        
    }
    return res;
}

console.log(pyramid('{}', 12))