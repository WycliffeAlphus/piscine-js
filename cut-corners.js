function round(nb){
// round behaves similar to Math.round()
if (nb<0) return -round(-nb);
  let firstPart = 0;
  while(firstPart+1 <= nb){
      firstPart++
  }
  return (nb-firstPart)>0.5?firstPart+1:firstPart;
}

// ceil behaves similar to Math.ceil()
function ceil(nb){
         let sign = false;
    if(nb<0) {
        sign=true;
        nb = -nb;
    }
    let firstPart = 0;
    while(firstPart<nb){
        firstPart++
    }
      if (sign){
        return -firstPart
    }
    return firstPart;
}
// floor behaves similar to Math.ceil()
function floor(nb){
       let sign = false;
    if(nb<0) {
        sign=true;
        nb = -nb;
    };
    let firstPart = 0
    while(firstPart+1<=nb){
        firstPart++
    }
      if (sign){
        return -firstPart
    }
    return firstPart
}

//trunc behaves similar to Math.trunc()
function trunc(nb){
    let sign = false;
    if(nb<0) {
        sign=true
        nb = -nb
    };
    let firstPart = 0;
    while(firstPart+1<=nb){
    firstPart++
    }
    if (sign){
        return -firstPart
    }
    return firstPart;
}