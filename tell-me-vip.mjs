import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

let path = process.argv[2];

if (path === undefined) {
    path = './guests';
}

try {
    let number = 0;
    let totalNames = [];
    const files = await readdir(path);
    
    for (const file of files) {
        // Join the path with the filename to get the full path
        const filePath = join(path, file);
        const obj = await readFile(filePath, 'utf8');
        const obj1 = JSON.parse(obj);
        
        if (obj1.answer.toLowerCase() === 'yes') {
            const name = file.split('.');
            const names = name[0].split('_');
            const firstName = names[0];
            const lastName = names[1];
            totalNames.push(`${lastName} ${firstName}`);
        }
    }

    let sortedNames = totalNames.sort();
    
    let output = '';
    for (const newName of sortedNames) {
        number++;
        output += `${number}. ${newName}\n`;
    }
    output = output.trim()
    await writeFile('vip.txt', output, 'utf8');

    console.log(output);
    
} catch (err) {
    console.error(err);
}
