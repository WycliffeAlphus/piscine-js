function words(n){
return n.split(" ");
}

function sentence(n){
return n.join(" ")
}
function yell(n){
    return n.toUpperCase()
}

function whisper(n){
    
    return "*"+n.toLowerCase()+"*";
}

function capitalize(n){
    let first = n.charAt(0).toUpperCase();
    let second = n.slice(1).toLowerCase();
    return first+second
}