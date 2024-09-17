import {readdir} from 'fs/promises'

let path = process.argv[2];

if (path === undefined){
    path = './guests'
}

try {
    let count = 0;
    const files = await readdir(path)
    for (const file of files){
        count++
    }
    console.log(count)

} catch(err){
    console.error(err);
}
