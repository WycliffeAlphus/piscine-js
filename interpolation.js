function interpolation({step, start, end, callback, duration}){
    const stepSize = (end-start)/step;
    const delay = duration/step;

 // runStep runs each step with a delay   
   function runStep(i) {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            const distance = i;
            const point = start+stepSize*i;
            callback([distance, point]);
            resolve();
        }, delay*i);
    });
   }

 // promise create array of Promises for each step
 const promises = [];
 for (let i=0; i<step; i++){
    promises.push(runStep(i));
 }
return Promise.all(promises);
}