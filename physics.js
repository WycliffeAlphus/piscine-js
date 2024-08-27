

function getAcceleration(n){
    if (typeof n.f==='number' && typeof n.m === 'number'){
        return n.f/n.m;
    } if (typeof n.Δv==='number' && typeof n.Δt === 'number'){
        return n.Δv/n.Δt;
    } if (typeof n.t==='number' && typeof n.d === 'number'){
        return (2*(n.d))/(n.t*n.t);
    } 
        return "impossible"
}