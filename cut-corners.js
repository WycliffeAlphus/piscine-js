function round(nb){
    const nbDec = nb-parseInt(nb);
    if (nbDec >=0.5) {
        return parseInt(nb)+1;
    } else if (nbDec < 0.5) {
        return parseInt(nb);
    } else {
        return parseInt(nb);
    }
}

function ceil(nb){
    const firstPart = parseInt(nb);
    return (nb>firstPart)?firstPart+1:nb;
}

function floor(nb){
    const firstPart = parseInt(nb);
    return(nb>firstPart)?firstPart-1:nb;
}

function trunc(nb){
    return parseInt(nb);
}
