function RNA(n){
 const mapper = {
    G : "C",
    C : "G",
    T : "A",
    A : "U",
    '' : '',
 }   

let res =[];
for (let i=0;i<n.length;i++){
    res.push(mapper[n[i].toUpperCase()]);
}
return res.join("")
}

function DNA(n){
    const mapper = {
      C : "G",
      G : "C",
      A : "T",
      U : "A",
      '' : '',
     }   
    
    let res =[];
    for (let i=0;i<n.length;i++){
        res.push(mapper[n[i].toUpperCase()]);
    }
    return res.join("")
}