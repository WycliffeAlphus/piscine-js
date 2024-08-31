   const vowels = /[aeiou]/i; //global variable
function vowelDots(n){
     return n.replace(new RegExp(vowels.source, 'gi'), '$&.'); 
     // $& represents the matched vowel
}