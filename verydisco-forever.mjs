import {writeFile} from 'fs/promises'

let args1 = process.argv[2]

let temp = "";
let res = "";
for (let i = 0; i < args1.length; i++) {
  if (args1[i] === " ") {
    let parts = Math.ceil(temp.length / 2);
    let part1 = temp.slice(0, parts);
    let part2 = temp.slice(parts);
    res += part2 + part1 + " ";
    temp = ""
  } else {
    temp += args1[i]
  }
}

if (temp.length > 0) {
  let parts = Math.ceil(temp.length / 2);
  let part1 = temp.slice(0, parts);
  let part2 = temp.slice(parts);
  res += part2 + part1;
}

writeFile("verydisco-forever.txt", res.trim())
