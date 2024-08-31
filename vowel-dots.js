function vowelDots(n){
    let vowels = /[aeiou]/gi;
     return n.replace(vowels, '$&.'); 
     // $& represents the matched vowel
}