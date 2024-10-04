const fs = require('node:fs');

// Async code
const content = 'Contents of the new async file';
fs.writeFile('./async.txt', content, 'utf-8', (error) => { // responsible for writing the file
	if (error) {
		console.log(`Error writing the file: ${error.message}`);
		return;
	}
	console.log('File successfully created asynchronously');
});

// Sync code
try {
	fs.writeFileSync('./file.txt', 'Hello, World!', 'utf-8'); // responsible for writing the file
	console.log('File created successfully');
} catch (error) {
	console.log(`Error writing the file: ${error.message}`);
}
