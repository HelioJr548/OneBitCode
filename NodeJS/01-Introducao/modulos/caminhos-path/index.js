const path = require('node:path');

const dir = 'src';
const file = 'app.js';
const relativePath = '../arquivos/relatorio.pdf';

// path.join(): Combines path segments into a single path.
const fullPath = path.join(__dirname, dir, file);
console.log(fullPath);
console.log('---------------');

// path.resolve(): Resolves an absolute path from given path segments.
const absolutePath = path.resolve(relativePath);
console.log(absolutePath);
console.log('---------------');

// path.basename(): Returns the file or directory name of a path.
const fileName = path.basename(relativePath);
console.log(fileName);
console.log('---------------');

// path.dirname(): Returns the parent directory of a path.
const dirnamePath = path.dirname(relativePath);
console.log(dirnamePath);
console.log('---------------');

// path.extname(): Returns the file extension of a path.
const ext = path.extname(absolutePath);
console.log(ext);
