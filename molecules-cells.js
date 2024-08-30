function RNA(n){
 const mapper = {
    G : "C",
    C : "G",
    T : "A",
    A : "U",
 }   

res =[];
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
     }   
    
    res =[];
    for (let i=0;i<n.length;i++){
        res.push(mapper[n[i].toUpperCase()]);
    }
    return res.join("")
}
