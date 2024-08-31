function letterSpaceNumber(n){
const regexp = /[a-zA-Z] \d(?!\d)(?![a-zA-Z])/g;
const res = n.match(regexp);
return res || [];
}