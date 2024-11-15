const fs = require('node:fs');

// Async code
fs.rename('./file.txt', 'file.csv', (error) => { // responsible for renaming the file
	if (error) {
		console.log(`Error renaming the file: ${error.message}`);
		return;
	}
	console.log('File successfully renamed asynchronously');
});
