const fs = require('fs');

const inputFile = 'source/meteor-bundle-3.js';
const outputDir = 'output';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

let fileCount = 1;
let buffer = '';

const splitBuffer = () => {
    const outputFile = `${outputDir}/file${fileCount}.js`;
    fs.writeFileSync(outputFile, buffer.trim());
    fileCount++;
    buffer = '';
};

fs.readFileSync(inputFile, 'utf-8').split('\n\n').forEach((line) => {
    buffer += line + '\n\n';
    if (buffer.split('\n').length > 3) {
        splitBuffer();
    }
});

if (buffer) {
    splitBuffer();
}
