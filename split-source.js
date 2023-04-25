const fs = require('fs');

const inputFile = 'source/modules-3.js';
const outputDir = 'output-modules';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

let fileCount = 1;
let buffer = '';

const splitBuffer = (text) => {
    const outputFile = `${outputDir}/file${fileCount}.js`;
    fs.writeFileSync(outputFile, text);
    fileCount++;
    buffer = '';
};
const splitter = '//\n' +
    '// node_modules/'

fs.readFileSync(inputFile, 'utf-8').split(splitter).forEach((line) => {
    splitBuffer(line);
});
