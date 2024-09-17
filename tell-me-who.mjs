import { readdir } from 'fs/promises'

let path = process.argv[2];

if (path === undefined) {
    path = './guests';
}

try {
    let number = 0;
    let totalNames =[];
    const files = await readdir(path);
    for (const file of files) {
        let name = file.split('.');
        let names = name[0].split('_');
        let firstName = names[0];
        let LastName = names[1];
        totalNames.push(LastName.concat(' ', firstName));
    }
    let sortedNames = totalNames.sort();
    for (const newName of sortedNames){
        number++
        console.log(`${number}. ${newName}`)
    }
} catch (err) {
    console.error(err);
}