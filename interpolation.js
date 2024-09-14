function interpolation({step, start, end, callback, duration}){
    const stepSize = (end-start)/step;
    const delay = delay/step;

    for (let i=0; i<step; i++){
        setTimeout(()=>{
            const distance = i;
            const point = start +stepSize * i
            callback([distance, point]);
        }, delay*i);
    }
}