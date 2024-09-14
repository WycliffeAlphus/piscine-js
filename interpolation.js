function interpolation({step, start, end, callback, duration}){
    const stepSize = (end-start)/step;
    const delay = duration/step;

 // runStep runs each step with a delay   
   function runStep(i) {
    if (i >= step)return Promise.resolve();

    return new Promise((resolve)=>{
        setTimeout(()=> {
            const distance = i;
            const point = start+stepSize*i;
            callback([distance, point]);
            resolve();
        }, delay*i);
    }).then(() => runStep(i+1));
   }
   return runStep(0);
}