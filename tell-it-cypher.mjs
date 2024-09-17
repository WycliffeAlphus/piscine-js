import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

// Get the file path, conversion type (encode/decode), and optional new file name
let filePath = process.argv[2];
let conversion = process.argv[3];
let providedFileName = process.argv[4];


if (filePath === undefined) {
    console.error("Please provide a file to encode or decode.");
    process.exit(1);
}

try {
    // Read the content of the file
    const fileContent = await readFile(filePath, 'utf8');
    let outputContent = '';

    // Perform base64 encoding or decoding
    if (conversion.toLowerCase() === 'encode') {
        outputContent = Buffer.from(fileContent).toString('base64');
        // If a new file name is provided, use it, otherwise use 'cypher.txt'
        const outputFile = providedFileName || 'cypher.txt';
        await writeFile(outputFile, outputContent, 'utf8');
        console.log(`File encoded successfully. Saved as ${outputFile}`);
    } 
    else if (conversion.toLowerCase() === 'decode') {
        outputContent = Buffer.from(fileContent, 'base64').toString('utf8');
        // If a new file name is provided, use it, otherwise use 'clear.txt'
        const outputFile = providedFileName || 'clear.txt';
        await writeFile(outputFile, outputContent, 'utf8');
        console.log(`File decoded successfully. Saved as ${outputFile}`);
    } 
    else {
        console.error("Invalid conversion type. Use 'encode' or 'decode'.");
        process.exit(1);
    }

} catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
