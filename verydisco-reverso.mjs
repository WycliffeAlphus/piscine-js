import { readFile } from 'fs/promises';

const fileReader = async filename => {
    try {
        const content = await readFile(filename, 'utf8'); 
        let res = "";

        for (let i = 0; i < content.length; i++) {
            if (content[i] === " ") { 
                let parts = Math.ceil(temp.length / 2);
                let part1 = temp.slice(0, parts);
                let part2 = temp.slice(parts);
                res += part2 + part1 + " ";
                temp = "";
            } else {
                temp += content[i]; 
            }
        }
        
        if (temp.length > 0) {
            let parts = Math.ceil(temp.length / 2);
            let part1 = temp.slice(0, parts);
            let part2 = temp.slice(parts);
            res += part2 + part1;
        }

        console.log(res.trim()); 
    } catch (err) {
        console.error(err);
    }
};


fileReader('verydisco-forever.txt');
