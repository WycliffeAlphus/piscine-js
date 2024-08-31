function letterSpaceNumber(n){
const regexp = /[a-zA-Z] \d(?![a-zA-Z])/g;
const res = n.match(regexp);
return res || [];
}